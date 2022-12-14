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
      title: t('views.auth.resource.name'),
    },
    {
      dataIndex: 'url',
      title: t('views.auth.resource.url'),
    },
    {
      dataIndex: 'description',
      title: t('common.description'),
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
