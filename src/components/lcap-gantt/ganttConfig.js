import {gantt} from 'dhtmlx-gantt';
import {locale} from "@/locale";
import moment from "moment";

function ganttDealById(list, id) {
    for (let i = 0; i < list.length; i++) {
        if (list[i].key == id)
            return list[i].label;
    }
    return "";
}

export const ganttPlugins = {
    click_drag: true,
    drag_timeline: true,// Drag graph
    marker: true, // time mark
    fullscreen: true, // full screen
    tooltip: true,// Information when the mouse passes
    undo: true // Allow undo
};

const currTime = moment(new Date().valueOf()).format('YYYY-MM-DD');
const project1Time = moment(new Date().valueOf() + 2 * 24 * 60 * 60 * 1000).format('YYYY-MM-DD');
const project2Time = moment(new Date().valueOf() + 4 * 24 * 60 * 60 * 1000).format('YYYY-MM-DD');
export const initialData = {
    data: [
        {id: 1, text: 'Project #1', start_date: currTime, duration: 3, progress: 0.6, open: true},
        {id: 2, text: 'Example 1', start_date: project1Time, duration: 3, progress: 0.4, parent: 1},
        {id: 3, text: 'Example 2', start_date: project2Time, duration: 3, progress: 0.4, parent: 1},
    ],
    links: [
        {id: 1, source: 1, target: 2, type: '0'},
        {id: 2, source: 2, target: 3, type: '0'},
    ],
};

export const basicConfig = {
    branch_loading: true,
    xml_date: "%Y-%m-%d",
    order_branch: true,
    autofit: true,
    drag_links: false,// Connect
    readonly: true, // read only
    date_scale: "%m month %d day", // Display column names on the right
    layout: {// Drag and drop layout
        css: "gantt_container",
        resizer: true,
        cols: [
            {
                // adding horizontal scrollbar to the grid via the scrollX attribute
                rows:[
                    {view: "grid", scrollX: "gridScroll", scrollable: true, scrollY: "scrollVer"},
                    {view: "scrollbar", id: "gridScroll"}
                ]
            },
        ],
        rows: [
            {
                cols: [
                    {view: "grid", id: "grid", scrollX: "scrollHor", scrollY: "scrollVer"},
                    {resizer: true, width: 1},
                    {view: "timeline", id: "timeline", scrollX: "scrollHor", scrollY: "scrollVer"},
                    {view: "scrollbar", scroll: "y", id: "scrollVer"}
                ]
            },
            {view: "scrollbar", scroll: "x", id: "scrollHor", height: 20}
        ],

},
    start_on_monday: true,
    work_time: true,
    resize_rows: true,
    fit_tasks: true,

};
export const basicTemplate = {
    task_end_date: function (date) {
        return gantt.templates.task_date(moment(new Date(date.valueOf() - 1000 * 60 * 60 * 24)).format("YYYY-MM-DD"));
    },
    // Pop-up window title date range
    task_time: function (start, end, task) {
        return "Period: " + moment(start).format('YYYY-MM-DD') + " to " + moment(end).format('YYYY-MM-DD');
    },
    // Pop-up window title plan name
    task_text: function (start, end, task) {
        return task.text;
    },
    timeline_cell_class: function (task, date) {
        if (!gantt.isWorkTime({task: task, date: date})) {
            return "weekend";
        } else {
            return 'weekday'
        }
    },
    grid_date_format: function (date, column) {
        if (column === "end_date") {
            return moment(new Date(date.valueOf() - 1000 * 60 * 60 * 24)).format("YYYY-MM-DD");
        } else if (column === "start_date") {
            return moment(date).format("YYYY-MM-DD");
        }
    },
}




