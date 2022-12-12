<script lang="ts" setup>
  import { PageWrapper } from '/@/components/Page';
  import { useI18n } from '/@/hooks/web/useI18n';
  import { BasicTable, useTable } from '/@/components/Table';
  import { getColumns, searchFormSchema } from './data';
  import { getMenuList } from '/@/api/sys/menu';

  const { t } = useI18n();

  const columns = getColumns();

  const [registerTable] = useTable({
    title: '账号列表',
    api: async () => {
      const res = await getMenuList();
      return {
        items: res,
      };
    },
    rowKey: 'id',
    columns,
    formConfig: {
      labelWidth: 120,
      schemas: searchFormSchema,
      autoSubmitOnEnter: true,
    },
    useSearchForm: false,
    showTableSetting: true,
    bordered: true,
    showIndexColumn: false,
    pagination: false,
    actionColumn: {
      title: '操作',
      dataIndex: 'action',
      slots: { customRender: 'action' },
    },
  });
</script>
<template>
  <PageWrapper :title="t('routes.auth.menu')">
    <BasicTable @register="registerTable">
      <!-- <template #toolbar>
        <a-button type="primary" @click="handleCreate"> 添加 </a-button>
      </template> -->
      <!-- <template #action="{ record }">
        <TableAction
          :actions="[
            {
              icon: 'clarity:note-edit-line',
              tooltip: '编辑用户资料',
              // onClick: handleEdit.bind(null, record),
            },
            {
              icon: 'ant-design:delete-outlined',
              color: 'error',
              tooltip: '删除此账号',
              popConfirm: {
                title: '是否确认删除',
                confirm: handleDelete.bind(null, record),
              },
            },
          ]"
        />
      </template> -->
    </BasicTable>
  </PageWrapper>
</template>
