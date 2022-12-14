import { getResourceCategoryList } from '/@/api/sys/resourceCategory';
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
    field: 'categoryId',
    component: 'ApiSelect',
    label: '资源分类',
    componentProps: {
      placeholder: '请选择',
      api: async () => {
        const res = await getResourceCategoryList();
        return res?.map((r) => ({
          label: r.name,
          value: r.id,
        }));
      },
    },
    rules: [{ required: true, message: '请选择' }],
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
