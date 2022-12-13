import { getMenuList } from '/@/api/sys/menu';
import { FormSchema } from '/@/components/Form';
import { treeKeyChange } from '/@/utils/helper/treeHelper';

/** 表单列 */
export const schemas: FormSchema[] = [
  {
    field: 'type',
    component: 'RadioButtonGroup',
    label: '菜单类型',
    defaultValue: 0,
    componentProps: {
      placeholder: '请选择',
      options: [
        {
          label: '菜单',
          value: 0,
        },
        {
          label: '按钮',
          value: 1,
        },
      ],
    },
    required: true,
  },
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
    required: true,
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
];
