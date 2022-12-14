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
      dataIndex: 'name',
      title: t('views.auth.role.name'),
    },
    {
      dataIndex: 'description',
      title: t('views.auth.role.description'),
    },
    {
      dataIndex: 'createTime',
      title: t('common.createTime'),
      customRender: ({ record }) => {
        return formatToDateTime(record?.createTime);
      },
    },
    {
      dataIndex: 'sort',
      title: t('views.auth.role.sort'),
    },
    {
      dataIndex: 'status',
      title: t('views.auth.role.status'),
      customRender: ({ record }) => {
        if (record?.status === 1) {
          return '是';
        }
        if (record?.status === 0) {
          return '否';
        }
        return '-';
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
