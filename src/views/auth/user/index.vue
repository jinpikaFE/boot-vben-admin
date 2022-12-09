<script lang="ts" setup>
  import { PageWrapper } from '/@/components/Page';
  import { BasicTable, useTable, TableAction } from '/@/components/Table';
  import { getColumns, searchFormSchema } from './data';
  import FormModal from './components/FormModal.vue';
  import { reactive } from 'vue';
  import { delUser, getUserList } from '/@/api/sys/user';
  import { useModal } from '/@/components/Modal';
  import { useMessage } from '/@/hooks/web/useMessage';

  const searchInfo = reactive<Recordable>({});
  const { createMessage } = useMessage();

  const columns = getColumns();

  const state: {
    record: any;
  } = reactive({
    record: {},
  });

  const [registerTable, { reload }] = useTable({
    title: '账号列表',
    api: async ({ page, pageSize, ...restParams }) => {
      const res = await getUserList({
        pageNum: page,
        pageSize,
        ...restParams,
      });
      return {
        total: res?.total,
        items: res?.list,
      };
    },
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
      title: '操作',
      dataIndex: 'action',
      slots: { customRender: 'action' },
    },
  });

  const [modalRegister, { openModal, closeModal }] = useModal();

  const handleEdit = (record: Recordable) => {
    openModal();
    state.record = record;
  };

  const handleDelete = async (record: Recordable) => {
    await delUser({
      id: record?.id,
    });
    createMessage.success('删除成功');
    reload();
  };

  const handleCreate = () => {
    state.record = undefined;
    openModal();
  };
</script>

<template>
  <PageWrapper title="用户管理">
    <BasicTable @register="registerTable" :searchInfo="searchInfo">
      <template #toolbar>
        <a-button type="primary" @click="handleCreate"> 添加 </a-button>
      </template>
      <template #action="{ record }">
        <TableAction
          :actions="[
            {
              icon: 'clarity:note-edit-line',
              tooltip: '编辑用户资料',
              onClick: handleEdit.bind(null, record),
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
      </template>
    </BasicTable>
    <FormModal
      @register="modalRegister"
      :title="state.record ? '编辑' : '添加'"
      :record="state.record"
      @reload="reload"
      @closeModal="closeModal"
    />
  </PageWrapper>
</template>
