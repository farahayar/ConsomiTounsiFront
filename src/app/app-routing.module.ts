import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './admin/pages/dashboard/dashboard.component';
import { SignInComponent } from './admin/sign-in/sign-in.component';
import { BackOfficeComponent } from './layouts/back-office/back-office.component';
import { FrontOfficeComponent } from './layouts/front-office/front-office.component';
import { HomeComponent } from './user/home/home.component';
import { LoginComponent } from './user/login/login.component';
import { ForumComponent } from './user/pages/forum/forum.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: FrontOfficeComponent,
    children: [
      {
        path: '',
        component: HomeComponent
      },
      {
        path: 'forum',
        component: ForumComponent
      },
      
    ]
  },
  {
        path: 'login',
        component: LoginComponent
      },
  {
    path: 'admin',
    component: BackOfficeComponent,
    children: [
      {
        path: '',
        component: SignInComponent
      },
      {
        path: 'dashboard',
        component: DashboardComponent
      },
      
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {


}
