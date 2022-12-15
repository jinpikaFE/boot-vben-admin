import { FormSchema } from '/@/components/Form';

/** 表单列 */
export const schemas: FormSchema[] = [
  {
    field: 'name',
    component: 'Input',
    label: '资源名称',
    componentProps: {
      placeholder: '请输入',
    },
    required: true,
  },
  {
    field: 'url',
    component: 'Input',
    label: '资源路径',
    componentProps: {
      placeholder: '请输入',
    },
    required: true,
  },
  {
    field: 'description',
    component: 'InputTextArea',
    label: '描述',
    componentProps: {
      placeholder: '请输入',
    },
  },
];
