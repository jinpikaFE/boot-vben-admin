import { getMenuList } from '/@/api/sys/menu';
import { getResourceCategoryList } from '/@/api/sys/resourceCategory';
import { FormSchema } from '/@/components/Form';
import { treeKeyChange } from '/@/utils/helper/treeHelper';

/** 表单列 */
export const schemas: FormSchema[] = [
  {
    field: 'name',
    component: 'Input',
    label: '角色名称',
    componentProps: {
      placeholder: '请输入',
    },
    required: true,
  },
  {
    field: 'sort',
    component: 'InputNumber',
    label: '排序',
    componentProps: {
      placeholder: '请输入',
      precision: 0,
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
    field: 'menus',
    component: 'ApiTreeSelect',
    label: '菜单',
    required: true,
    componentProps: {
      placeholder: '请选择',
      multiple: true,
      treeCheckable: true,
      treeDefaultExpandAll: true,
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
    field: 'resources',
    component: 'ApiTreeSelect',
    label: '资源',
    required: true,
    componentProps: {
      placeholder: '请选择',
      multiple: true,
      treeCheckable: true,
      treeDefaultExpandAll: true,
      api: async () => {
        const res = await getResourceCategoryList();
        return res?.map((item) => ({
          label: item?.name,
          value: item?.id + '' + item?.name,
          checkable: false,
          children: item?.resources?.map((citem) => ({
            label: citem?.name,
            value: citem?.id,
          })),
        }));
      },
    },
  },
];
