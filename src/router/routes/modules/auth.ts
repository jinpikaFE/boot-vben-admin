import { LAYOUT } from '../../constant';
import { t } from '/@/hooks/web/useI18n';
import type { AppRouteModule } from '/@/router/types';

const auth: AppRouteModule = {
  path: '/auth',
  name: 'Auth',
  component: LAYOUT,
  redirect: '/auth/user',
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
    {
      path: 'menu',
      name: 'Menu',
      component: () => import('/@/views/auth/menu/index.vue'),
      meta: {
        title: t('routes.auth.menu'),
        icon: 'simple-icons:about-dot-me',
      },
    },
    {
      path: 'role',
      name: 'Role',
      component: () => import('/@/views/auth/role/index.vue'),
      meta: {
        title: t('routes.auth.role'),
        icon: 'simple-icons:about-dot-me',
      },
    },
    {
      path: 'resource',
      name: 'Resource',
      component: () => import('/@/views/auth/resource/index.vue'),
      meta: {
        title: t('routes.auth.resource'),
        icon: 'simple-icons:about-dot-me',
      },
    },
  ],
};

export default auth;
