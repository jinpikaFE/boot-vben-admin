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
      component: () => import('/@/views/auth/resource/category/index.vue'),
      // redirect: '/auth/resource/resourceCategory',
      meta: {
        icon: 'ion:grid-outline',
        title: t('routes.auth.resource'),
        orderNo: 1,
      },
      children: [
        {
          path: 'resourceCategory',
          name: 'ResourceCategory',
          component: () => import('/@/views/auth/resource/category/index.vue'),
          meta: {
            title: t('routes.auth.resourceCategory'),
            icon: 'simple-icons:about-dot-me',
          },
        },
        {
          path: 'resourceList/:categoryId',
          name: 'ResourceList',
          component: () => import('/@/views/auth/resource/resource/index.vue'),
          meta: {
            title: t('routes.auth.resourceList'),
            icon: 'simple-icons:about-dot-me',
            hideMenu: true,
            showMenu: false,
            currentActiveMenu: '/auth/resource/resourceCategory',
            hideBreadcrumb: true,
          },
        },
      ],
    },
  ],
};

export default auth;
