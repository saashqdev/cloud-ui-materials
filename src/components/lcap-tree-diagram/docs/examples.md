### Basic usage

```view
<template>
  <lcap-tree-diagram
    :data-source="list"
    value-field="id"
    text-field="label"
    @click="click"
    @onDelete="onDelete"
    ref="node"
    data-entity=""
  >
  </lcap-tree-diagram>
</template>
<script>
export default {
  data() {
    return {
      list: [
        {
          category: {
            id: 111,
            createdTime: null,
            updatedTime: null,
            createdBy: null,
            updatedBy: null,
            name: 'Total Risk',
            explanation: 'This is all risk',
            pid: 0,
            levelName: 'All risks',
          },
        },
        {
          category: {
            id: 112,
            createdTime: null,
            updatedTime: null,
            createdBy: null,
            updatedBy: 'Homer Simpson',
            name: 'Operational Risk',
            explanation: 'Ahhh',
            pid: 111,
            levelName: 'Total Risk/Operational Risk',
          },
        },
        {
          category: {
            id: 2616454501036544,
            createdTime: '2023-05-22T12:38:35.000Z',
            updatedTime: '2023-05-22T12:38:35.000Z',
            createdBy: 'Homer Simpson',
            updatedBy: null,
            name: 'Total Risk 1',
            explanation: 'a',
            pid: 112,
            levelName: 'Total Risk/Operational Risk/Total Risk 1',
          },
        },
        {
          category: {
            id: 2616454501036544,
            createdTime: '2023-05-22T12:38:35.000Z',
            updatedTime: '2023-05-22T12:38:35.000Z',
            createdBy: 'Homer Simpson',
            updatedBy: null,
            name: 'Total Risk 1',
            explanation: 'a',
            pid: 112,
            levelName: 'Total Risk/Operational Risk/Total Risk 1',
          },
        },
        {
          category: {
            id: 2616454501036544,
            createdTime: '2023-05-22T12:38:35.000Z',
            updatedTime: '2023-05-22T12:38:35.000Z',
            createdBy: 'Homer Simpson',
            updatedBy: null,
            name: 'Total Risk 1',
            explanation: 'a',
            pid: 112,
            levelName: 'Total Risk/Operational Risk/Total Risk 1',
          },
        },
        {
          category: {
            id: 2616454501036544,
            createdTime: '2023-05-22T12:38:35.000Z',
            updatedTime: '2023-05-22T12:38:35.000Z',
            createdBy: 'Homer Simpson',
            updatedBy: null,
            name: 'Total Risk 1',
            explanation: 'a',
            pid: 112,
            levelName: 'Total Risk/Operational Risk/Total Risk 1',
          },
        },
        {
          category: {
            id: 2616454501036544,
            createdTime: '2023-05-22T12:38:35.000Z',
            updatedTime: '2023-05-22T12:38:35.000Z',
            createdBy: 'Homer Simpson',
            updatedBy: null,
            name: 'Total Risk 111',
            explanation: 'a',
            pid: 112,
            levelName: 'Total Risk/Operational Risk/Total Risk 1',
          },
        },
        {
          category: {
            id: 2616454501036544,
            createdTime: '2023-05-22T12:38:35.000Z',
            updatedTime: '2023-05-22T12:38:35.000Z',
            createdBy: 'Homer Simpson',
            updatedBy: null,
            name: 'Total Risk 111',
            explanation: 'a',
            pid: 112,
            levelName: 'Total Risk/Operational Risk/Total Risk 1',
          },
        },
        {
          category: {
            id: 2616526777340416,
            createdTime: '2023-05-22T15:05:37.000Z',
            updatedTime: '2023-05-22T15:06:19.000Z',
            createdBy: 'Homer Simpson',
            updatedBy: 'Homer Simpson',
            name: '222',
            explanation: null,
            pid: 2616454501036544,
            levelName: 'Total Risk/Operational Risk/Total Risk 1/222',
          },
        },
        {
          category: {
            id: 2617524968501760,
            createdTime: '2023-05-24T00:56:27.000Z',
            updatedTime: '2023-05-24T00:56:27.000Z',
            createdBy: 'Homer Simpson',
            updatedBy: null,
            name: 'Financial Risk',
            explanation: 'This is a financial risk',
            pid: 111,
            levelName: 'Total Risk/Financial Risk',
          },
        },
        {
          category: {
            id: 2617524968501760,
            createdTime: '2023-05-24T00:56:27.000Z',
            updatedTime: '2023-05-24T00:56:27.000Z',
            createdBy: 'Homer Simpson',
            updatedBy: null,
            name: 'Financial Risk',
            explanation: 'This is a financial risk',
            pid: 111,
            levelName: 'Total Risk/Financial Risk',
          },
        },
        {
          category: {
            id: 2617524968501760,
            createdTime: '2023-05-24T00:56:27.000Z',
            updatedTime: '2023-05-24T00:56:27.000Z',
            createdBy: 'Homer Simpson',
            updatedBy: null,
            name: 'Financial Risk',
            explanation: 'This is a financial risk',
            pid: 111,
            levelName: 'Total Risk/Financial Risk',
          },
        },
        {
          category: {
            id: 2617524968501760,
            createdTime: '2023-05-24T00:56:27.000Z',
            updatedTime: '2023-05-24T00:56:27.000Z',
            createdBy: 'Homer Simpson',
            updatedBy: null,
            name: 'Financial Risk',
            explanation: 'This is a financial risk',
            pid: 111,
            levelName: 'Total Risk/Financial Risk',
          },
        },
        {
          category: {
            id: 2617524968501760,
            createdTime: '2023-05-24T00:56:27.000Z',
            updatedTime: '2023-05-24T00:56:27.000Z',
            createdBy: 'Homer Simpson',
            updatedBy: null,
            name: 'Financial Risk',
            explanation: 'This is a financial risk',
            pid: 111,
            levelName: 'Total Risk/Financial Risk',
          },
        },
        {
          category: {
            id: 2617524968501760,
            createdTime: '2023-05-24T00:56:27.000Z',
            updatedTime: '2023-05-24T00:56:27.000Z',
            createdBy: 'Homer Simpson',
            updatedBy: null,
            name: 'Financial Risk',
            explanation: 'This is a financial risk',
            pid: 111,
            levelName: 'Total Risk/Financial Risk',
          },
        },
        {
          category: {
            id: 2617524968501760,
            createdTime: '2023-05-24T00:56:27.000Z',
            updatedTime: '2023-05-24T00:56:27.000Z',
            createdBy: 'Homer Simpson',
            updatedBy: null,
            name: 'Financial Risk',
            explanation: 'This is a financial risk',
            pid: 111,
            levelName: 'Total Risk/Financial Risk',
          },
        },
        {
          category: {
            id: 2617524968501760,
            createdTime: '2023-05-24T00:56:27.000Z',
            updatedTime: '2023-05-24T00:56:27.000Z',
            createdBy: 'Homer Simpson',
            updatedBy: null,
            name: 'Financial Risk',
            explanation: 'This is a financial risk',
            pid: 111,
            levelName: 'Total Risk/Financial Risk',
          },
        },
        {
          category: {
            id: 2617524968501761,
            createdTime: '2023-05-24T00:56:27.000Z',
            updatedTime: '2023-05-24T00:56:27.000Z',
            createdBy: 'Homer Simpson',
            updatedBy: null,
            name: 'Financial Risk',
            explanation: 'This is a financial risk',
            pid: 111,
            levelName: 'Total Risk/Financial Risk',
          },
        },
        {
          category: {
            id: 2617524968501760,
            createdTime: '2023-05-24T00:56:27.000Z',
            updatedTime: '2023-05-24T00:56:27.000Z',
            createdBy: 'Homer Simpson',
            updatedBy: null,
            name: 'Financial Risk',
            explanation: 'This is a financial risk',
            pid: 111,
            levelName: 'Total Risk/Financial Risk',
          },
        },
        {
          category: {
            id: 2617525630448128,
            createdTime: '2023-05-24T00:57:48.000Z',
            updatedTime: '2023-05-24T00:57:48.000Z',
            createdBy: 'Homer Simpson',
            updatedBy: null,
            name: 'Legal risk',
            explanation: 'This is a legal risk',
            pid: 111,
            levelName: 'All risks/legal risks',
          },
        },
        {
          category: {
            id: 2617525630448128,
            createdTime: '2023-05-24T00:57:48.000Z',
            updatedTime: '2023-05-24T00:57:48.000Z',
            createdBy: 'Homer Simpson',
            updatedBy: null,
            name: 'Legal risk',
            explanation: 'This is a legal risk',
            pid: 111,
            levelName: 'All risks/legal risks',
          },
        },
        {
          category: {
            id: 2617525630448128,
            createdTime: '2023-05-24T00:57:48.000Z',
            updatedTime: '2023-05-24T00:57:48.000Z',
            createdBy: 'Homer Simpson',
            updatedBy: null,
            name: 'Legal risk',
            explanation: 'This is a legal risk',
            pid: 111,
            levelName: 'All risks/legal risks',
          },
        },
        {
          category: {
            id: 2617525630448128,
            createdTime: '2023-05-24T00:57:48.000Z',
            updatedTime: '2023-05-24T00:57:48.000Z',
            createdBy: 'Homer Simpson',
            updatedBy: null,
            name: 'Legal risk',
            explanation: 'This is a legal risk',
            pid: 111,
            levelName: 'All risks/legal risks',
          },
        },
        {
          category: {
            id: 2617525630448128,
            createdTime: '2023-05-24T00:57:48.000Z',
            updatedTime: '2023-05-24T00:57:48.000Z',
            createdBy: 'Homer Simpson',
            updatedBy: null,
            name: 'Legal risk',
            explanation: 'This is a legal risk',
            pid: 111,
            levelName: 'All risks/legal risks',
          },
        },
        {
          category: {
            id: 2617525630448128,
            createdTime: '2023-05-24T00:57:48.000Z',
            updatedTime: '2023-05-24T00:57:48.000Z',
            createdBy: 'Homer Simpson',
            updatedBy: null,
            name: 'Legal risk',
            explanation: 'This is a legal risk',
            pid: 111,
            levelName: 'All risks/legal risks',
          },
        },
        {
          category: {
            id: 2617525630448128,
            createdTime: '2023-05-24T00:57:48.000Z',
            updatedTime: '2023-05-24T00:57:48.000Z',
            createdBy: 'Homer Simpson',
            updatedBy: null,
            name: 'Legal risk',
            explanation: 'This is a legal risk',
            pid: 111,
            levelName: 'All risks/legal risks',
          },
        },
        {
          category: {
            id: 2617525630448128,
            createdTime: '2023-05-24T00:57:48.000Z',
            updatedTime: '2023-05-24T00:57:48.000Z',
            createdBy: 'Homer Simpson',
            updatedBy: null,
            name: 'Legal risk',
            explanation: 'This is a legal risk',
            pid: 111,
            levelName: 'All risks/legal risks',
          },
        },
        {
          category: {
            id: 2617525630448128,
            createdTime: '2023-05-24T00:57:48.000Z',
            updatedTime: '2023-05-24T00:57:48.000Z',
            createdBy: 'Homer Simpson',
            updatedBy: null,
            name: 'Legal risk',
            explanation: 'This is a legal risk',
            pid: 111,
            levelName: 'All risks/legal risks',
          },
        },
        {
          category: {
            id: 2617525630448128,
            createdTime: '2023-05-24T00:57:48.000Z',
            updatedTime: '2023-05-24T00:57:48.000Z',
            createdBy: 'Homer Simpson',
            updatedBy: null,
            name: 'Legal risk',
            explanation: 'This is a legal risk',
            pid: 111,
            levelName: 'All risks/legal risks',
          },
        },
        {
          category: {
            id: 2617525630448128,
            createdTime: '2023-05-24T00:57:48.000Z',
            updatedTime: '2023-05-24T00:57:48.000Z',
            createdBy: 'Homer Simpson',
            updatedBy: null,
            name: 'Legal risk',
            explanation: 'This is a legal risk',
            pid: 111,
            levelName: 'All risks/legal risks',
          },
        },
        {
          category: {
            id: 2617525630448128,
            createdTime: '2023-05-24T00:57:48.000Z',
            updatedTime: '2023-05-24T00:57:48.000Z',
            createdBy: 'Homer Simpson',
            updatedBy: null,
            name: 'Legal risk',
            explanation: 'This is a legal risk',
            pid: 111,
            levelName: 'All risks/legal risks',
          },
        },
        {
          category: {
            id: 2617525630448128,
            createdTime: '2023-05-24T00:57:48.000Z',
            updatedTime: '2023-05-24T00:57:48.000Z',
            createdBy: 'Homer Simpson',
            updatedBy: null,
            name: 'Legal risk',
            explanation: 'This is a legal risk',
            pid: 111,
            levelName: 'All risks/legal risks',
          },
        },
        {
          category: {
            id: 2617525630448128,
            createdTime: '2023-05-24T00:57:48.000Z',
            updatedTime: '2023-05-24T00:57:48.000Z',
            createdBy: 'Homer Simpson',
            updatedBy: null,
            name: 'Legal risk',
            explanation: 'This is a legal risk',
            pid: 111,
            levelName: 'All risks/legal risks',
          },
        },
        {
          category: {
            id: 2617525630448128,
            createdTime: '2023-05-24T00:57:48.000Z',
            updatedTime: '2023-05-24T00:57:48.000Z',
            createdBy: 'Homer Simpson',
            updatedBy: null,
            name: 'Legal risk',
            explanation: 'This is a legal risk',
            pid: 111,
            levelName: 'All risks/legal risks',
          },
        },
        {
          category: {
            id: 2617525630448128,
            createdTime: '2023-05-24T00:57:48.000Z',
            updatedTime: '2023-05-24T00:57:48.000Z',
            createdBy: 'Homer Simpson',
            updatedBy: null,
            name: 'Legal risk',
            explanation: 'This is a legal risk',
            pid: 111,
            levelName: 'All risks/legal risks',
          },
        },
        {
          category: {
            id: 2617525630448128,
            createdTime: '2023-05-24T00:57:48.000Z',
            updatedTime: '2023-05-24T00:57:48.000Z',
            createdBy: 'Homer Simpson',
            updatedBy: null,
            name: 'Legal risk',
            explanation: 'This is a legal risk',
            pid: 111,
            levelName: 'All risks/legal risks',
          },
        },
        {
          category: {
            id: 2617525630448128,
            createdTime: '2023-05-24T00:57:48.000Z',
            updatedTime: '2023-05-24T00:57:48.000Z',
            createdBy: 'Homer Simpson',
            updatedBy: null,
            name: 'Legal risk',
            explanation: 'This is a legal risk',
            pid: 111,
            levelName: 'All risks/legal risks',
          },
        },
        {
          category: {
            id: 2617525630448128,
            createdTime: '2023-05-24T00:57:48.000Z',
            updatedTime: '2023-05-24T00:57:48.000Z',
            createdBy: 'Homer Simpson',
            updatedBy: null,
            name: 'Legal risk',
            explanation: 'This is a legal risk',
            pid: 111,
            levelName: 'All risks/legal risks',
          },
        },
        {
          category: {
            id: 2617525630448128,
            createdTime: '2023-05-24T00:57:48.000Z',
            updatedTime: '2023-05-24T00:57:48.000Z',
            createdBy: 'Homer Simpson',
            updatedBy: null,
            name: 'Legal risk',
            explanation: 'This is a legal risk',
            pid: 111,
            levelName: 'All risks/legal risks',
          },
        },
        {
          category: {
            id: 2617525630448128,
            createdTime: '2023-05-24T00:57:48.000Z',
            updatedTime: '2023-05-24T00:57:48.000Z',
            createdBy: 'Homer Simpson',
            updatedBy: null,
            name: 'Legal risk',
            explanation: 'This is a legal risk',
            pid: 111,
            levelName: 'All risks/legal risks',
          },
        },
        {
          category: {
            id: 2617525630448128,
            createdTime: '2023-05-24T00:57:48.000Z',
            updatedTime: '2023-05-24T00:57:48.000Z',
            createdBy: 'Homer Simpson',
            updatedBy: null,
            name: 'Legal risk',
            explanation: 'This is a legal risk',
            pid: 111,
            levelName: 'All risks/legal risks',
          },
        },
        {
          category: {
            id: 2617525630448128,
            createdTime: '2023-05-24T00:57:48.000Z',
            updatedTime: '2023-05-24T00:57:48.000Z',
            createdBy: 'Homer Simpson',
            updatedBy: null,
            name: 'Legal risk',
            explanation: 'This is a legal risk',
            pid: 111,
            levelName: 'All risks/legal risks',
          },
        },
        {
          category: {
            id: 2617667365097984,
            createdTime: '2023-05-24T05:46:09.000Z',
            updatedTime: '2023-05-24T05:46:09.000Z',
            createdBy: 'Homer Simpson',
            updatedBy: null,
            name: 'Test name',
            explanation: 'Test description',
            pid: 2617525630448128,
            levelName: 'All risks/Legal risks/Test name',
          },
        },
        {
          category: {
            id: 2617677592957440,
            createdTime: '2023-05-24T06:06:58.000Z',
            updatedTime: '2023-05-24T06:06:58.000Z',
            createdBy: 'Homer Simpson',
            updatedBy: null,
            name: 'Test',
            explanation: 'Test',
            pid: 111,
            levelName: 'All Risks/Tests',
          },
        },
        {
          category: {
            id: 2617677592957441,
            createdTime: '2023-05-24T06:06:58.000Z',
            updatedTime: '2023-05-24T06:06:58.000Z',
            createdBy: 'Homer Simpson',
            updatedBy: null,
            name: 'Test',
            explanation: 'Test',
            pid: 2617677592957440,
            levelName: 'All Risks/Tests',
          },
        },
        {
          category: {
            id: 2617677592957441,
            createdTime: '2023-05-24T06:06:58.000Z',
            updatedTime: '2023-05-24T06:06:58.000Z',
            createdBy: 'Homer Simpson',
            updatedBy: null,
            name: 'Test',
            explanation: 'Test',
            pid: 2617677592957440,
            levelName: 'All Risks/Tests',
          },
        },
        {
          category: {
            id: 2617677592957441,
            createdTime: '2023-05-24T06:06:58.000Z',
            updatedTime: '2023-05-24T06:06:58.000Z',
            createdBy: 'Homer Simpson',
            updatedBy: null,
            name: 'Test',
            explanation: 'Test',
            pid: 2617677592957440,
            levelName: 'All Risks/Tests',
          },
        },
        {
          category: {
            id: 2617677592957441,
            createdTime: '2023-05-24T06:06:58.000Z',
            updatedTime: '2023-05-24T06:06:58.000Z',
            createdBy: 'Homer Simpson',
            updatedBy: null,
            name: 'Test',
            explanation: 'Test',
            pid: 2617677592957440,
            levelName: 'All Risks/Tests',
          },
        },
        {
          category: {
            id: 2618177043534336,
            createdTime: '2023-05-24T23:03:06.000Z',
            updatedTime: '2023-05-24T23:03:06.000Z',
            createdBy: 'Homer Simpson',
            updatedBy: null,
            name: 'Test 1',
            explanation: null,
            pid: 2616526777340416,
            levelName: 'All Risks/Operational Risks/All Risks 1/222/Test 1',
          },
        },
        {
          category: {
            id: 2618177043634336,
            createdTime: '2023-05-24T23:03:06.000Z',
            updatedTime: '2023-05-24T23:03:06.000Z',
            createdBy: 'Homer Simpson',
            updatedBy: null,
            name: 'Test 111',
            explanation: null,
            pid: 2618177043534336,
            levelName: 'All Risks/Operational Risks/All Risks 1/222/Test 1',
          },
        },
        {
          category: {
            id: 2618177043535330,
            createdTime: '2023-05-24T23:03:06.000Z',
            updatedTime: '2023-05-24T23:03:06.000Z',
            createdBy: 'Homer Simpson',
            updatedBy: null,
            name: 'Test 122',
            explanation: null,
            pid: 2618177043534336,
            levelName: 'All Risks/Operational Risks/All Risks 1/222/Test 1',
          },
        },
        {
          category: {
            id: 2618303194067456,
            createdTime: '2023-05-25T03:19:45.000Z',
            updatedTime: '2023-05-25T03:19:45.000Z',
            createdBy: 'Homer Simpson',
            updatedBy: null,
            name: '12312312312',
            explanation: null,
            pid: 2617677592957440,
            levelName: 'All risks/test/12312312312',
          },
        },
      ],
      temp: [],
    };
  },
  methods: {
    // onTogglePop(e) {
    //   console.log(e)
    // },
    click(e) {
      console.log(e);
    },
    onDelete(e) {
      this.$refs.node.reload();
    },
  },
};
</script>

```