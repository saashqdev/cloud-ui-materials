<template>
  <div class="ganttRoot">
    <u-linear-layout type="flex" justify="space-between" class="functionBar">
      <div>
        <u-input placeholder="Please enter the task name" v-model="searchTitle" class="searchInput"></u-input>
        <u-button class="ganttSearchButton" icon="search" text="Search" color="primary" @click="searchTask">Search</u-button>
      </div>
      <div>
        <u-select v-model="defaultDateView" @select="ganttChangeDateView($event)">
          <u-select-item value="y">Year</u-select-item>
          <u-select-item value="m">Month</u-select-item>
          <u-select-item value="w">Week</u-select-item>
          <u-select-item value="d">Day</u-select-item>
        </u-select>
        <u-button class="showTodayButton" icon="" v-if="showToday" @click="changeToday">Today</u-button>
      </div>
    </u-linear-layout>
    <div id="gantt" ref="gantt" class="ganttContainer"/>
  </div>
</template>

<script>
import {gantt} from 'dhtmlx-gantt';
import 'dhtmlx-gantt/codebase/dhtmlxgantt.css'; // Style module
import {locale} from "@/locale";
import {basicConfig, initialData, ganttPlugins, basicTemplate} from "@/ganttConfig";
import supportDataSource from "@/mixins/support.datasource";
import moment from 'moment';

export default {
  name: 'lcap-gantt',
  data() {
    return {
      defaultDateView: 'd',
      ganttInstance: null,
      searchTitle: '',
      ganttEvent: {},
      customStyle: {},
      entityName: '',
    };
  },
  props: {
    dataSource: [Function, Array, Object],
    linkSource: [Function, Array, Object],
    showToday: {type: Boolean, default: true},
    taskView: {type: String, default: 'd'},
    ganttTableConfig: [Function, Array, Object],
    startField: {type: String, default: ''},
    durationField: {type: String, default: ''},
    progressField: {type: String, default: ''},
    colorField: {type: String, default: ''},
    textField: {type: String, default: ''},
    endDateField: {type: String, default: ''},
    iconField: {type: String, default: ''},
    idField: {type: String, default: ''},
    parentField: {type: String, default: ''},
    skins: {type: String, default: 'default'},
    ganttStartDate: {type: String, default: ''},
    ganttEndDate: {type: String, default: ''},
  },
  mixins: [supportDataSource],
  mounted() {
    // Monitor style changes
    this.customStyle = this.parseCustomStyle(this.$el);
    const observer = new MutationObserver(function (mutations) {
      mutations.map(function (mutation) {
        if (mutation.type === 'attributes') {
          this.customStyle = this.parseCustomStyle(this.$el);
        }
      }.bind(this));
    }.bind(this));
    observer.observe(this.$el, {attributes: true});

  },
  computed: {
    changedObj() {
      let {currentDataSource, ganttTableConfig, skins, customStyle, ganttStartDate, ganttEndDate} = this;
      return {currentDataSource,ganttTableConfig, skins, customStyle, ganttStartDate, ganttEndDate};
    },
  },
  watch: {
    changedObj: {
      handler() {
        this.$nextTick(() => {
          this.initGantt();
          this.ganttChangeEvent();// interaction events
        });
      },
      deep: true,
      immediate: true,
    },
    taskView: {
      handler() {
        this.ganttChangeDateView(this.taskView);
      },
    },
  },
  methods: {
    hasSubstr(parentId, type) {
      let task = gantt.getTask(parentId);
      if (type == 'title') {
        if (task.text.toLowerCase().indexOf(this.searchTitle) !== -1)
          return true;
      }
    },
    parseCustomStyle(element) {
      const cssList = element.style.cssText.split(';');
      const cssObj = {};
      cssList.forEach(item => {
        const [key, value] = item.split(':');
        if (key && value) {
          cssObj[key.trim()] = value.trim();
        }
      });
      return cssObj;
    },
    searchTask() {
      if (this.searchTitle) {
        this.ganttEvent.onBeforeTaskDisplay = gantt.attachEvent("onBeforeTaskDisplay", (id, task) => {
          if (this.hasSubstr(id, 'title')) {
            return true;
          }
          return false;
        });
        gantt.refreshData()
        gantt.render()
      } else {
        this.ganttEvent.onBeforeTaskDisplay = gantt.attachEvent("onBeforeTaskDisplay", (id, task) => {
          return true
        })
        gantt.refreshData()
        gantt.render()
      }

    },
    initGantt() {
      gantt.clearAll();
      gantt.locale = locale;
      // Enable dynamic loading
      gantt.config = {
        ...gantt.config,
        ...basicConfig,
      };
      gantt.templates = {
        ...gantt.templates,
        ...basicTemplate,
      };
      gantt.plugins(ganttPlugins);
      if (this.showToday) {
        this.createTodayLine();
      }
      this.changeTaskColor();
      this.highlightWeekend();
      this.initSkins();
      this.initStartEndDate();
      this.parseIDETableConfig(this.ganttTableConfig);
      gantt.init(this.$refs.gantt);
      let ganttFinalDataSources;
      if (this.$env.VUE_APP_DESIGNER || !window.appInfo) {
        ganttFinalDataSources = initialData.data;
      }else {
        ganttFinalDataSources = this.currentDataSource.data;
      }
      ganttFinalDataSources = this.normalizeGanttData(ganttFinalDataSources);
      console.log('ganttFinalDataSources', ganttFinalDataSources);
      gantt.parse({
        data: ganttFinalDataSources,
        // links: this.innerLinkSource || initialData.links,
      });
    },
    highlightWeekend() {
      gantt.templates.timeline_cell_class = (item, date) => {
        if (date.getDay() === 0 || date.getDay() === 6) {
          return 'weekend';
        }
        return '';
      }
    },
    // Today's line
    createTodayLine() {
      var dateToStr = gantt.date.date_to_str("%Y year %M%d day");
      var markerId = gantt.addMarker({
        id: 'markerLine',
        start_date: new Date(),
        css: "today",
        text: "Today",
        title: dateToStr(new Date())
      });
      gantt.updateMarker(markerId);
    },
    // Locate today's line
    changeToday() {
      this.$nextTick(() => {
        let ganTT = document.getElementsByClassName('gantt_marker today')
        if (ganTT.length > 0) {
          gantt.scrollTo(ganTT[0].offsetLeft - 300, null);
        } else {
          console.log('Today\'s marker line is not shown on the chart');
        }
      })
    },
    changeTaskColor() {
      gantt.templates.task_class = function (start, end, task) {
        // The task.state value is one of default/unfinished/finished/canceled
        return `milestone-${task.state}`;
      }
    },
    // Switch year, month, and day view
    ganttChangeDateView(event) {
      switch (event.value) {
        case 'y':
          gantt.config.scale_unit = "year";
          gantt.config.step = 1;
          gantt.config.subscales = null;
          gantt.config.date_scale = "%Y year";
          gantt.templates.date_scale = null;
          break;
        case 'm':
          gantt.config.scale_unit = 'month';
          gantt.config.step = 1;
          gantt.config.date_scale = "%mmonth";
          gantt.templates.date_scale = null;
          break;
        case 'w':
          gantt.config.scale_unit = 'week';
          gantt.config.step = 1;
          gantt.config.date_scale = "Week %w";
          gantt.templates.date_scale = null;
          break;
        case 'd':
          gantt.config.scale_unit = 'day';
          gantt.config.step = 1;
          gantt.config.date_scale = "%m month %d day";
          gantt.templates.date_scale = null;
          break;
      }
      gantt.render();
    },

    // gantt interaction event registration
    ganttChangeEvent() {
      this.ganttEvent.onTaskClick = gantt.attachEvent("onTaskClick", (id, e) => {
        const task = gantt.getTask(id);
        this.$emit('taskClick', task);
      });
      this.ganttEvent.onScaleClick = gantt.attachEvent("onScaleClick", (e, date) => {
        this.$emit('scaleClick', date);
      });

      // gantt rendering
      this.ganttEvent.onGanttReady = gantt.attachEvent("onGanttReady", () => {
        gantt.templates.tooltip_text = (start, end, task) => {
          let template = "";
          if (!this.ganttTableConfig) return template;
          for (let item of this.ganttTableConfig) {
            const currentField = this.extractEntityField(item?.nameField);
            if (item.showTooltip && currentField === this.extractEntityField(this.textField)) {
              template += `<b>${item.labelField}:</b> ${task.text}<br/>`;
            } else if (item.showTooltip && currentField !== this.extractEntityField(this.startField)) {
              template += `<b>${item.labelField}:</b> ${task[currentField]}<br/>`;
            }
          }
          template += "<b>Start time:</b> "
            + moment(start).format('YYYY-MM-DD')
            + "<br/><b>End time:</b> "
            + moment(new Date(end).valueOf() - 1000 * 60 * 60 * 24).format('YYYY-MM-DD');
          return template;
        }
        gantt.templates.grid_file = (item) => {
          if (!item) return "<div class='gantt_tree_icon gantt_file'></div>";
          let template = "";
          const iconUrl = item[this.extractEntityField(this.iconField)];
          const isSvg = iconUrl && iconUrl.endsWith('.svg');
          if (iconUrl) {
            template += `<div class="gantt_tree_icon"><img src="${iconUrl}"></img></div>`;
            return template;
          } else {
            return "<div class='gantt_tree_icon gantt_file'></div>";
          }
        };
      });
      // Modify the default pop-up window
      gantt.attachEvent("onBeforeLightbox", (id) => {
        let task = gantt.getTask(id);
        task.proTemplate = `${gantt.locale.labels.taskProjectType_0}`
        return true;
      });
      // The user finishes dragging and releases the mouse
      this.ganttEvent.onAfterTaskChanged = gantt.attachEvent("onAfterTaskChanged", (id, mode, task) => {
        clearTimeout(this.timer)
        this.timer = setTimeout(() => {
          gantt.render();
        }, 500)
      });
      // Save new
      this.ganttEvent.onLightboxSave = gantt.attachEvent("onLightboxSave", (id, item) => {
        if (!item.text) {
          this.$toast.error("Please fill in the plan name!");
          return false;
        }
        return true;
      });
    },
    parseIDETableConfig(config) {
      if (!config) return;
      let tableConfig = [];
      config.map(item => {
        let obj = {};
        const currentField = this.extractEntityField(item?.nameField);
        if (currentField === this.startField) {
          obj = {
            name: 'start_date',
            template: function (task) {
              return moment(task.start_date).format("YYYY-MM-DD")
            },
          };
        } else if (currentField === this.extractEntityField(this.textField)) {
          obj = {name: 'text', tree: true,};
        } else {
          obj = {name: this.extractEntityField(item.nameField)};
        }
        obj = Object.assign(obj, {
          label: item.labelField,
          resize: true,
          width: item.width,
          align: "center",
          customIcon: item.iconField,
        });

        tableConfig.push(obj);
      });
      // console.log('tableConfig', tableConfig);
      gantt.config.columns = tableConfig;
    },
    initSkins() {
      switch (this.skins) {
        case 'default':
          require('dhtmlx-gantt/codebase/dhtmlxgantt.css'); // style module
          break;
        case 'skyblue':
          require('dhtmlx-gantt/codebase/skins/dhtmlxgantt_skyblue.css');
          break;
        case 'meadow':
          require('dhtmlx-gantt/codebase/skins/dhtmlxgantt_meadow.css');
          break;
        case 'broadway':
          require('dhtmlx-gantt/codebase/skins/dhtmlxgantt_broadway.css');
          break;
      }
    },
    initStartEndDate() {
      if (this.ganttStartDate) {
        gantt.config.start_date = this.ganttStartDate;
      }
      if (this.ganttEndDate) {
        gantt.config.end_date = this.ganttEndDate;
      }
    },
    changeObjKey(obj, oldKey, newKey) {
      if (oldKey === newKey) return;
      if (obj?.hasOwnProperty(oldKey)) {
        obj[newKey] = obj[oldKey];
        delete obj[oldKey];
      }
    },
    extractEntityName(list) {
      if (list?.length === 0 || !list) {
        return ''
      }
      const field = list[0]?.nameField;
      if (field && field.indexOf('.') !== -1) {
        return field.split('.')[0];
      } else {
        return ''
      }
    },
    extractEntityField(string) {
      if (!string) {
        return ''
      }
      if (string.indexOf('.') !== -1) {
        const len = string.split('.').length;
        return string.split('.')[len - 1];
      } else {
        return string
      }
    },
    flatList(list, entityName) {
      if (entityName?.length === 0) {
        return list
      }
      let res = [];
      for (let i = 0; i < list.length; i++) {
        res.push(list[i][entityName])
      }
      return res;
    },
    normalizeGanttData(ganttFinalDataSources) {
      const entityName = this.extractEntityName(this.ganttTableConfig);
      this.entityName = entityName;
      ganttFinalDataSources = this.flatList(ganttFinalDataSources, entityName);
      ganttFinalDataSources.map((obj) => {
        this.changeObjKey(obj, this.extractEntityField(this.startField), 'start_date');
        this.changeObjKey(obj, this.extractEntityField(this.durationField), 'duration');
        this.changeObjKey(obj, this.extractEntityField(this.idField), 'id');
        this.changeObjKey(obj, this.extractEntityField(this.colorField), 'color');
        this.changeObjKey(obj, this.extractEntityField(this.progressField), 'progress');
        this.changeObjKey(obj, this.extractEntityField(this.parentField), 'parent');
        this.changeObjKey(obj, this.extractEntityField(this.textField), 'text');
      })
      return ganttFinalDataSources
    }
  }
};
</script>

<style>
:root {
  --gantt-table-header-font-size: 12px;
  --gantt-table-header-font-color: #000;
  --gantt-table-header-background-color: #fff;
  --gantt-table-header-text-align: center;
  --gantt-table-background-color: #fff;
  --gantt-table-background-color-striped: #f5f5f5;
  --gantt-table-background-color-hover: #f5f5f5;
  --gantt-table-border-color: #ebebeb;
  --gantt-table-cell-color: #454545;
  --gantt-table-header-font-weight: normal;

}

.ganttRoot {
  width: 100%;
  height: 600px;
}

.showTodayButton {
  border: 1px solid #ebebeb;
  border-radius: 4px;
  background-color: #fff;
  color: #454545;
  cursor: pointer;
  padding: 0 8px;
}

.ganttSearchButton {
  border: 1px solid #ebebeb;
  border-radius: 2px;
  background-color: #fff;
  color: #454545;
  cursor: pointer;
  padding: 0 8px;
}

.ganttContainer {
  width: 100%;
  height: 100%;
  overflow: hidden;
}

.weekend {
  background: #fafafa !important;
}

.weekday {
  background: #fff;
}

.gantt_message_area {
  display: none !important;
}

.gantt_task_progress {
  opacity: 0.2 !important;
}

.gantt_grid_scale .gantt_grid_head_cell {
  color: var(--gantt-table-header-font-color);
  font-size:var(--gantt-table-header-font-size);
  background-color: var(--gantt-table-header-background-color);
  font-weight: var(--gantt-table-header-font-weight);
  text-align: var(--gantt-table-header-text-align);
}

.gantt_cell {
  color: var(--gantt-table-cell-color) !important;
}
.gantt_row, .gantt_row.odd {
  background-color: var(--gantt-table-background-color);
}

.gantt_row:hover, .gantt_row.odd:hover {
  background-color: var(--gantt-table-background-color-hover) !important;
}

.gantt_row.odd {
  background-color: var(--gantt-table-background-color-striped);
}

.gantt_task_grid_row_resize {
  background-color: var(--gantt-table-border-color) !important;
}
.gantt_row gantt_row_task {
  height: 100px !important;
  line-height: 100px !important;
}


</style>
