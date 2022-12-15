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
      dataIndex: 'username',
      title: t('views.auth.user.username'),
    },
    {
      dataIndex: 'nickName',
      title: t('views.auth.user.nickname'),
    },
    {
      dataIndex: 'email',
      title: t('views.auth.user.email'),
    },
    {
      dataIndex: 'createTime',
      title: t('common.createTime'),
      customRender: ({ record }) => {
        return formatToDateTime(record?.createTime);
      },
    },
    {
      dataIndex: 'updateTime',
      title: t('common.updateTime'),
      customRender: ({ record }) => {
        return formatToDateTime(record?.updateTime);
      },
    },
    {
      dataIndex: 'loginTime',
      title: t('views.auth.user.loginTime'),
      customRender: ({ record }) => {
        return formatToDateTime(record?.loginTime);
      },
    },
    {
      dataIndex: 'status',
      title: t('views.auth.user.enable'),
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
