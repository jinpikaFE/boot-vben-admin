<script lang="ts" setup>
  import { BasicModal, useModalInner } from '/@/components/Modal';
  import { BasicForm, FormActionType, useForm } from '/@/components/Form/index';
  import { useMessage } from '/@/hooks/web/useMessage';
  import { schemas } from './data';
  import { ref, watchEffect } from 'vue';
  import { GetUserInfoModel } from '/@/api/sys/model/userModel';
  import { createMenu, updateMenu } from '/@/api/sys/menu';
  const props = defineProps<{ record: GetUserInfoModel }>();

  const emit = defineEmits(['reload', 'closeModal']);

  const formElRef = ref<Nullable<FormActionType>>(null);

  const { createMessage } = useMessage();

  const [register, { submit, setFieldsValue }] = useForm({
    labelWidth: 120,
    labelCol: { span: 6 },
    wrapperCol: { span: 14 },
    schemas,
  });

  const [registterModelInn, { setModalProps }] = useModalInner();

  watchEffect(() => {
    if (formElRef.value) {
      if (props?.record) {
        setFieldsValue(props?.record);
      }
    }
  });

  const handleSubmit = async (values: any) => {
    setModalProps({ confirmLoading: true });
    try {
      if (props?.record) {
        /** 编辑 */
        await updateMenu({ ...values, id: props?.record?.id });
        createMessage.success('编辑成功');
      } else {
        await createMenu(values);
        createMessage.success('添加成功');
      }
      emit('reload');
      emit('closeModal');
    } finally {
      setModalProps({ confirmLoading: false });
    }
  };
</script>

<template>
  <BasicModal @register="registterModelInn" v-bind="$attrs" @ok="submit" :width="800">
    <BasicForm
      @register="register"
      @submit="handleSubmit"
      :showActionButtonGroup="false"
      ref="formElRef"
    />
  </BasicModal>
</template>
