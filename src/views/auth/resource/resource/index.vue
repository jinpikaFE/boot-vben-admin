<script lang="ts" setup>
  import { PageWrapper } from '/@/components/Page';
  import { BasicTable, useTable, TableAction } from '/@/components/Table';
  import { getColumns, searchFormSchema } from './data';
  import FormModal from './components/FormModal.vue';
  import { reactive, unref } from 'vue';
  import { useModal } from '/@/components/Modal';
  import { useMessage } from '/@/hooks/web/useMessage';
  import { useRouter } from 'vue-router';
  import { delResource, getResourceList } from '/@/api/sys/resource';

  const searchInfo = reactive<Recordable>({});
  const { createMessage } = useMessage();
  const { currentRoute } = useRouter();
  const { params, query } = unref(currentRoute);
  console.log(params, query);

  const columns = getColumns();

  const state: {
    record: any;
  } = reactive({
    record: {},
  });

  const [registerTable, { reload }] = useTable({
    title: '资源列表',
    api: async ({ page, pageSize, ...restParams }) => {
      const res = await getResourceList({
        pageNum: page,
        pageSize,
        ...restParams,
        categoryId: params?.categoryId,
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
    showIndexColumn: false,
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

  const handleDelete = async (record: Recordable) => {
    await delResource({
      id: record?.id,
    });
    createMessage.success('删除成功');
    reload();
  };

  const handleEdit = (record: Recordable) => {
    openModal();
    state.record = record;
  };
  const handleCreate = () => {
    state.record = undefined;
    openModal();
  };
</script>

<template>
  <PageWrapper :title="query?.categoryName as string || ''">
    <BasicTable @register="registerTable" :searchInfo="searchInfo">
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
