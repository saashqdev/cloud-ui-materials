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
          { parent: { name: "John Doe", age: 20, home: "Fort Erie" } },
          { parent: { name: "Ned Flanders", age: 21, home: "Fort Erie" } },
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
