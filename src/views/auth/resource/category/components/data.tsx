import { FormSchema } from '/@/components/Form';

/** 表单列 */
export const schemas: FormSchema[] = [
  {
    field: 'name',
    component: 'Input',
    label: '分类名称',
    componentProps: {
      placeholder: '请输入',
    },
    rules: [{ required: true, message: '请输入' }],
  },
  {
    field: 'sort',
    component: 'InputNumber',
    label: '排序',
    componentProps: {
      placeholder: '请输入',
      precision: 0,
    },
    rules: [{ required: true, message: '请输入' }],
  },
];
