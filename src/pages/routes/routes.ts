import Companies from '@/pages/Companies/Companies.vue';
import Users from '@/pages/Users/Users.vue';
import UserDetail from '@/pages/Users/UserDetail/User.vue';
import { USER_NAME_ROUTES } from '@/pages/Users/constants';
import { COMPANY_NAME_ROUTES } from '@/pages/Companies/constants';

export const routes = [
    { path: '/companies', component: Companies,  },
    { path: '/company/:company_id/users', name: COMPANY_NAME_ROUTES.COMPANY_STAFF, component: Users },
    { path: '/user/:id', name: USER_NAME_ROUTES.USER_DETAIL,  component: UserDetail },
]