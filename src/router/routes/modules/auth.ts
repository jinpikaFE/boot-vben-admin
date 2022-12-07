import { LAYOUT } from '../../constant';
import { t } from '/@/hooks/web/useI18n';
import type { AppRouteModule } from '/@/router/types';

const auth: AppRouteModule = {
  path: '/auth',
  name: 'Auth',
  component: LAYOUT,
  redirect: '/auth/index',
  meta: {
    icon: 'ion:grid-outline',
    title: t('routes.auth.auth'),
    orderNo: 1,
  },
  children: [
    {
      path: 'user',
      name: 'User',
      component: () => import('/@/views/auth/user/index.vue'),
      meta: {
        title: t('routes.auth.user'),
        icon: 'simple-icons:about-dot-me',
      },
    },
  ],
};

export default auth;