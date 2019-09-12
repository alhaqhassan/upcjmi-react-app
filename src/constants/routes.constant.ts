import {lazy} from 'react';
import {IRoute} from '../types/common.type';
import {
  COMPANY_PORTAL_HOME_PATH,
  CONTACT_PATH,
  HOME_PATH,
  STUDENT_PORTAL_HOME_PATH,
} from './paths.constant';

export const COMMON_ROUTES: Array<IRoute> = [
  {
    path: HOME_PATH,
    screen: lazy(() => import('../screens/home.screen')),
  },
  {
    path: CONTACT_PATH,
    screen: lazy(() => import('../screens/contact.screen')),
  },
  {
    path: STUDENT_PORTAL_HOME_PATH,
    screen: lazy(() => import('../screens/student/home.student.screen')),
  },
  {
    path: COMPANY_PORTAL_HOME_PATH,
    screen: lazy(() => import('../screens/company/home.company.screen')),
  },
];
