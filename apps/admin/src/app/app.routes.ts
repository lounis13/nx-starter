import {Route} from "@angular/router";

export const appRoutes: Route[] = [
  {
    path: 'users',
    loadComponent: () => import('./pages/users/users.component').then(mod => mod.UsersComponent)
  },
];
