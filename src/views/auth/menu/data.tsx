import { BasicColumn, FormSchema } from '/@/components/Table/index';
import { useI18n } from '/@/hooks/web/useI18n';

const { t } = useI18n();

export function getColumns(): BasicColumn[] {
  return [
    {
      dataIndex: 'id',
      title: t('common.id'),
    },
    {
      dataIndex: 'title',
      title: t('views.auth.menu.title'),
    },
    {
      dataIndex: 'level',
      title: t('views.auth.menu.level'),
    },
    {
      dataIndex: 'name',
      title: t('views.auth.menu.name'),
    },
    {
      dataIndex: 'hidden',
      title: t('views.auth.menu.hidden'),
      customRender: ({ record }) => {
        if (record?.hidden === 1) {
          return '是';
        }
        if (record?.hidden === 0) {
          return '否';
        }
        return '-';
      },
    },
    {
      dataIndex: 'sort',
      title: t('views.auth.menu.sort'),
    },
  ];
}

export const searchFormSchema: FormSchema[] = [
  {
    field: 'keyword',
    label: '搜索',
    component: 'Input',
    colProps: { span: 8 },
  },
];
