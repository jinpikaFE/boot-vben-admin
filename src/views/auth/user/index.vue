<script lang="ts" setup>
  import { PageWrapper } from '/@/components/Page';
  import { BasicTable, useTable } from '/@/components/Table';
  import { getColumns, searchFormSchema } from './data';
  import { reactive } from 'vue';

  const searchInfo = reactive<Recordable>({});

  const columns = getColumns();

  const [registerTable] = useTable({
    title: '账号列表',
    // api: getAccountList,
    rowKey: 'id',
    columns,
    formConfig: {
      labelWidth: 120,
      schemas: searchFormSchema,
      autoSubmitOnEnter: true,
    },
    useSearchForm: true,
    showTableSetting: true,
    bordered: true,
    handleSearchInfoFn(info) {
      console.log('handleSearchInfoFn', info);
      return info;
    },
    actionColumn: {
      width: 120,
      title: '操作',
      dataIndex: 'action',
      // slots: { customRender: 'action' },
    },
  });
</script>

<template>
  <PageWrapper title="用户管理">
    <BasicTable @register="registerTable" :searchInfo="searchInfo">
      <template #toolbar>
        <a-button type="primary"> 操作按钮 </a-button>
      </template>
    </BasicTable>
  </PageWrapper>
</template>
