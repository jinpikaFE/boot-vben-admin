<script lang="ts" setup>
  import { BasicModal } from '/@/components/Modal';
  import { BasicForm, useForm } from '/@/components/Form/index';
  import { useMessage } from '/@/hooks/web/useMessage';
  import { schemas } from './data';
  import { createUser, updateUser } from '/@/api/sys/user';
  import { useAttrs, watchEffect } from 'vue';
  import { GetUserInfoModel } from '/@/api/sys/model/userModel';

  const attrs = useAttrs();
  const props = defineProps<{ record: GetUserInfoModel }>();

  console.log(props, attrs);

  const emit = defineEmits(['reload', 'closeModal']);

  const { createMessage } = useMessage();

  const [register, { submit, setFieldsValue, resetFields }] = useForm({
    labelWidth: 120,
    labelCol: { span: 6 },
    wrapperCol: { span: 14 },
    schemas,
  });

  watchEffect(() => {
    if (props?.record) {
      setFieldsValue(props?.record);
    } else {
      resetFields();
    }
  });

  const handleSubmit = async (values: any) => {
    if (props?.record) {
      /** 编辑 */
      await updateUser({ ...values, id: props?.record?.id });
      createMessage.success('编辑成功');
    } else {
      await createUser(values);
      createMessage.success('添加成功');
    }
    emit('reload');
    emit('closeModal');
    resetFields();
  };
</script>

<template>
  <BasicModal v-bind="$attrs" @ok="submit" :width="800">
    <BasicForm @register="register" @submit="handleSubmit" :showActionButtonGroup="false" />
  </BasicModal>
</template>
