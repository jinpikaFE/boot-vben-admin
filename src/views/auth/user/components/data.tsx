import { FormSchema } from '/@/components/Form';

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
    componentProps: {
      placeholder: '请输入',
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
];
