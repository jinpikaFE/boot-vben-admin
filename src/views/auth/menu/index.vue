<script lang="ts" setup>
  import { PageWrapper } from '/@/components/Page';
  import { useI18n } from '/@/hooks/web/useI18n';
  import { BasicTable, useTable, TableAction } from '/@/components/Table';
  import { getColumns, searchFormSchema } from './data';
  import { delMenu, getMenuList } from '/@/api/sys/menu';
  import { useMessage } from '/@/hooks/web/useMessage';
  import { useModal } from '/@/components/Modal';
  import { reactive } from 'vue';
  import FormModal from './components/FormModal.vue';

  const { t } = useI18n();

  const columns = getColumns();

  const { createMessage } = useMessage();

  const [registerTable, { reload }] = useTable({
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

  /** formModal */
  const state: {
    record: any;
  } = reactive({
    record: {},
  });
  const [modalRegister, { openModal, closeModal }] = useModal();
  const handleEdit = (record: Recordable) => {
    openModal();
    state.record = record;
  };
  const handleCreate = () => {
    state.record = undefined;
    openModal();
  };

  const handleDelete = async (record: Recordable) => {
    await delMenu({
      id: record?.id,
    });
    createMessage.success('删除成功');
    reload();
  };
</script>
<template>
  <PageWrapper :title="t('routes.auth.menu')">
    <BasicTable @register="registerTable">
      <template #toolbar>
        <a-button type="primary" @click="handleCreate"> 添加 </a-button>
      </template>
      <template #action="{ record }">
        <TableAction
          :actions="[
            {
              icon: 'clarity:note-edit-line',
              tooltip: '编辑',
              onClick: handleEdit.bind(null, record),
            },
            {
              icon: 'ant-design:delete-outlined',
              color: 'error',
              tooltip: '删除',
              popConfirm: {
                title: '是否确认删除',
                confirm: handleDelete.bind(null, record),
              },
              ifShow: !(record?.children?.length > 0),
            },
          ]"
        />
      </template>
    </BasicTable>
    <FormModal
      @register="modalRegister"
      :title="state.record ? '编辑' : '添加'"
      :record="state.record"
      @reload="reload"
      @closeModal="closeModal"
      destroyOnClose
    />
  </PageWrapper>
</template>
