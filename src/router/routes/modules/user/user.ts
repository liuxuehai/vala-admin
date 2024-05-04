import type { AppRouteModule } from '@/router/types';

import { LAYOUT } from '@/router/constant';
import { t } from '@/hooks/web/useI18n';

const charts: AppRouteModule = {
  path: '/user',
  name: 'User',
  component: LAYOUT,
  redirect: '/user/info',
  meta: {
    orderNo: 5000,
    icon: 'tabler:user-cog',
    title: t('routes.user.user.name'),
  },
  children: [
    {
      path: 'info',
      name: 'UserInfo',
      component: () => import('@/views/user/UserForm.vue'),
      meta: {
        title: t('routes.user.user.userForm'),
      },
    },
    {
      path: 'list',
      name: 'UserList',
      component: () => import('@/views/user/UserList.vue'),
      meta: {
        title: t('routes.user.user.userList'),
      },
    },
  ],
};

export default charts;
