import { BasicColumn, FormSchema } from '/@/components/Table/index';
import { useI18n } from '/@/hooks/web/useI18n';
import { formatToDateTime } from '/@/utils/dateUtil';

const { t } = useI18n();

export function getColumns(): BasicColumn[] {
  return [
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
      title: t('views.auth.user.create_time'),
      customRender: ({ record }) => {
        return formatToDateTime(record?.createTime);
      },
    },
    {
      dataIndex: 'loginTime',
      title: t('views.auth.user.login_time'),
      customRender: ({ record }) => {
        return formatToDateTime(record?.loginTime);
      },
    },
    {
      dataIndex: 'status',
      title: t('views.auth.user.enable'),
    },
  ];
}

export const searchFormSchema: FormSchema[] = [
  {
    field: 'account',
    label: '用户名',
    component: 'Input',
    colProps: { span: 8 },
  },
  {
    field: 'nickname',
    label: '昵称',
    component: 'Input',
    colProps: { span: 8 },
  },
];
