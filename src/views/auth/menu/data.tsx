import { BasicColumn, FormSchema } from '/@/components/Table/index';
import { useI18n } from '/@/hooks/web/useI18n';
import { formatToDateTime } from '/@/utils/dateUtil';

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
      dataIndex: 'icon',
      title: t('common.icon'),
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
    {
      dataIndex: 'createTime',
      title: t('common.createTime'),
      customRender: ({ record }) => {
        return formatToDateTime(record?.createTime);
      },
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
