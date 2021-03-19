import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'users',
    loadChildren: () => import('./users-list/users-list.module').then(m => m.UsersListModule),
  },
  {
    path: 'add',
    loadChildren: () => import('./user-details/user-details.module').then(m => m.UserDetailsModule),
  },
  {
    path: '**',
    redirectTo: 'users'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
