import { Tag } from 'ant-design-vue';
import { h } from 'vue';
import Icon from '/@/components/Icon';
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
      customRender: ({ record }) => {
        return h(Icon, { icon: record.icon });
      },
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
      dataIndex: 'isShow',
      title: t('views.auth.menu.isShow'),
      customRender: ({ record }) => {
        if (record?.isShow === 1) {
          return h(Tag, { color: 'green' }, () => '是');
        }
        if (record?.isShow === 0) {
          return h(Tag, { color: 'red' }, () => '否');
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
