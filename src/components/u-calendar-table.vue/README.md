<!-- The README.md is automatically generated based on api.yaml and docs/*.md for easy viewing on GitHub and NPM. If you need to modify, please view the source file -->

# UCalendarTable Calendar Table

- [Example](#example)
    - [Basic Usage](#Basic Usage)
-[API]()
    - [Props/Attrs](#propsattrs)
    - [Slots](#slots)
    - [Methods](#methods)

**Table**

Used to display large amounts of structured data. Supports displaying data for each day of the month on a monthly basis.

## Example
### Basic Usage

```vue
<template>
  <u-calendar-table
    first-title="Name"
    first-field="${parent.name} (${parent.age}) [${parent.home}]"
    :data-source-parent="dateSourceParent"
    :data-source="dateSourceChild"
    parent-key="parent.name"
    child-key="child.name"
    start-key="child.startTime"
    first-width="160"
    width="88"
  >
    <template #default="scope">
      <p v-if="scope.item.child && scope.item.child.count">
        Count: {{ scope.item.child.count }}
      </p>
      <p v-if="scope.item.child && scope.item.child.name">
        Name: {{ scope.item.child.name }}
      </p>
    </template>
  </u-calendar-table>
</template>
<script>
export default {
  data() {
    return {
      dateSourceParent: {
        content: [
          { parent: { name: "Homer Simpson", age: 17, home: "Fort Erie" } },
          { parent: { name: "Marge Simpson", age: 18, home: "Fort Erie" } },
          { parent: { name: "Bart Simpson", age: 19, home: "Fort Erie" } },
          { parent: { name: "Ned Flanders", age: 20, home: "Fort Erie" } },
          { parent: { name: "John Doe", age: 21, home: "Fort Erie" } },
        ],
        number: 1,
        size: 20,
        totalElements: 5,
        totalPages: 1,
      },
      dateSourceChild: {
        content: [
          { child: { name: "Homer Simpson", count: 3, startTime: "2021-10-14" } },
          { child: { name: "Marge Simpson", count: 4, startTime: "2021-10-01" } },
          { child: { name: "Bart Simpson", count: 5, startTime: "2021-10-02" } },
          { child: { name: "Ned Flanders", count: 1, startTime: "2021-10-03" } },
          { child: { name: "John Doe", count: 2, startTime: "2021-10-04" } },
          { child: { name: "Homer Simpson", count: 3, startTime: "2021-10-01" } },
          { child: { name: "Marge Simpson", count: 4, startTime: "2021-10-04" } },
          { child: { name: "Homer Simpson", count: 8, startTime: "2021-10-13" } },
          { child: { name: "Bart Simpson", count: 5, startTime: "2021-10-01" } },
          { child: { name: "Homer Simpson", count: 9, startTime: "2021-10-12" } },
          { child: { name: "Marge Simpson", count: 4, startTime: "2021-10-05" } },
        ],
        number: 1,
        size: 20,
        totalElements: 11,
        totalPages: 1,
      },
    };
  },
  methods: {},
};
</script>
```

## API
### Props/Attrs

| Prop/Attr | Type | Options | Default | Description |
| --------- | ---- | ------- | ------- | ----------- |
| data-source-parent | Array\<Item\> \| Function \| object | | | The main data source of the calendar table. The array represents direct data. The function needs to return a Promise |
| data-source | Array\<Item\> \| Function \| object | | | Calendar table sub-data source, array representation of direct data, the function needs to return a Promise |
| first-title | string | | `'Name'` | The title of the first item in the table |
| first-field | string | | `'parent.name'` | The identifier of the first item in the table in the data-source |
| parent-key | String | | `'parent.name'` | Key field in the main data source, used to associate data from the main/sub data source |
| child-key | String | | `'child.name'` | The key field in the child data source, used to associate data from the main/child data source |
| page-size | string \| number | | `20` | Number of items per page |
| data-schema | schema | | | The data type of each item in the calendar table |
| start-key | string | | `'child.startTime'` | A field in the data indicating the start time |
| end-key | string | | `'child.endTime'` | A field in the data indicating the end time |
| min-date | Date \| string | number | | | Minimum date, default 5 years ago |
| max-date | Date \| string | number | | | Maximum date, default is 4 years later |
| width | string \| number | | `48` | The width of each item in the table, default 48 means '48px' |
| first-width | string \| number | | `64` | Width of the first item of the table, default 64 means '64px' |

### Slots

#### (default)

Structure and styling of custom options

Methods

#### load()

Load with cache

| Param | Type | Default | Description |
| ----- | ---- | ------- | ----------- |

#### reload()

Clear cache and reload

| Param | Type | Default | Description |
| ----- | ---- | ------- | ----------- |

