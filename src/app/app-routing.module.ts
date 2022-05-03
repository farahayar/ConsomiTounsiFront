import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ChatBackComponent } from './admin/pages/chat-back/chat-back.component';
import { DashboardComponent } from './admin/pages/dashboard/dashboard.component';
import { SignInComponent } from './admin/sign-in/sign-in.component';
import { BackOfficeComponent } from './layouts/back-office/back-office.component';
import { FrontOfficeComponent } from './layouts/front-office/front-office.component';
import { HomeComponent } from './user/home/home.component';
import { AddQuestionComponent } from './user/pages/add-question/add-question.component';
import { ChatComponent } from './user/pages/chat/chat.component';
import { ForumComponent } from './user/pages/forum/forum.component';
import { LoginComponent } from './user/pages/login/login.component';

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
        component: ForumComponent,
      },
      {
        path: 'login',
        component: LoginComponent
      },
      {
        path: 'addQuestion',
        component: AddQuestionComponent
      },
    ]
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
      {
        path: 'chat',
        component: ChatBackComponent
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
