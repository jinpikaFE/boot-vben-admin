import { getMenuList } from '/@/api/sys/menu';
import { FormSchema } from '/@/components/Form';
import { treeKeyChange } from '/@/utils/helper/treeHelper';

/** 表单列 */
export const schemas: FormSchema[] = [
  {
    field: 'parentId',
    component: 'ApiTreeSelect',
    label: '上级菜单',
    componentProps: {
      placeholder: '请选择',
      api: async () => {
        const res = await getMenuList();
        return treeKeyChange(res, {
          labelField: 'title',
          valueField: 'id',
        });
      },
    },
  },
  {
    field: 'title',
    component: 'Input',
    label: '菜单名称',
    componentProps: {
      placeholder: '请输入',
    },
    rules: [{ required: true, message: '请输入' }],
  },
  {
    field: 'icon',
    component: 'IconPicker',
    label: '图标',
    componentProps: {
      placeholder: '请选择',
    },
    rules: [{ required: true, message: '请选择' }],
  },
  {
    field: 'name',
    component: 'Input',
    label: '前端标识名',
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
  {
    field: 'hidden',
    component: 'RadioGroup',
    label: '是否显示',
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
];
