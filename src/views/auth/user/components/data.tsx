import { h } from 'vue';
import { FormSchema } from '/@/components/Form';
import { uploadApi } from '/@/api/sys/upload';
import { CropperAvatar } from '/@/components/Cropper';
import { UploadApiResult } from '/@/api/sys/model/uploadModel';
import { getRoleListAll } from '/@/api/sys/role';

/** 表单列 */
export const schemas: FormSchema[] = [
  {
    field: 'username',
    component: 'Input',
    label: '用户名',
    componentProps: {
      placeholder: '请输入',
    },
    rules: [{ required: true, message: '请输入' }],
  },
  {
    field: 'nickName',
    component: 'Input',
    label: '昵称',
    componentProps: {
      placeholder: '请输入',
    },
    rules: [{ required: true, message: '请输入' }],
  },
  {
    field: 'email',
    component: 'Input',
    label: '邮箱',
    componentProps: {
      placeholder: '请输入',
    },
    rules: [{ required: true, message: '请输入' }],
  },
  {
    field: 'password',
    component: 'InputPassword',
    label: '密码',
    componentProps: {
      placeholder: '请输入',
    },
    rules: [{ required: true, message: '请输入' }],
  },
  {
    field: 'icon',
    component: 'Upload',
    label: '头像',
    required: true,
    rules: [
      {
        validator(rule, value) {
          if (!value) {
            return Promise.reject(new Error('请上传'));
          }
          return Promise.resolve();
        },
      },
    ],
    render: ({ model, field }) => {
      return h(CropperAvatar, {
        placeholder: '请输入',
        uploadApi,
        value: model[field],
        onChange: (e: ChangeEvent, data: UploadApiResult) => {
          model[field] = data?.data?.url;
        },
      } as any);
    },
  },
  {
    field: 'note',
    component: 'InputTextArea',
    label: '备注',
    componentProps: {
      placeholder: '请输入',
    },
  },
  {
    field: 'status',
    component: 'RadioGroup',
    label: '是否启用',
    defaultValue: 1,
    componentProps: {
      placeholder: '请选择',
      options: [
        {
          label: '是',
          value: 1,
        },
        {
          label: '否',
          value: 0,
        },
      ],
    },
  },
  {
    field: 'roleIds',
    component: 'ApiSelect',
    label: '角色',
    required: true,
    componentProps: {
      placeholder: '请选择',
      mode: 'multiple',
      api: async () => {
        const res = await getRoleListAll();
        return res?.map((item) => ({
          label: item.name,
          value: item.id,
        }));
      },
    },
  },
];
