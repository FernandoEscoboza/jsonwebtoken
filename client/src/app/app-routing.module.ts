import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PrivateComponent } from './components/private/private.component';
import { UserComponent } from './components/user/user.component';
import { UserGuard } from './guards/user.guard';

const routes: Routes = [
  {
    path: 'login',
    component: UserComponent
  },
  {
    path: 'private',
    component: PrivateComponent,
    canActivate: [UserGuard]  
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
