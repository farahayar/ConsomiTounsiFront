import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FrontOfficeComponent } from './layouts/front-office/front-office.component';
import { BackOfficeComponent } from './layouts/back-office/back-office.component';
import { SignInComponent } from './admin/sign-in/sign-in.component';
import { HomeComponent } from './user/home/home.component';
import { NavBarComponent } from './user/layouts/nav-bar/nav-bar.component';
import { FooterComponent } from './user/layouts/footer/footer.component';
import { ForumComponent } from './user/pages/forum/forum.component';
import { DashboardComponent } from './admin/pages/dashboard/dashboard.component';
import { SidebarComponent } from './admin/layouts/sidebar/sidebar.component';
import { NavBarBComponent } from './admin/layouts/nav-bar-b/nav-bar-b.component';
import { FooterBComponent } from './admin/layouts/footer-b/footer-b.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ChatComponent } from './user/pages/chat/chat.component';
import { LoginComponent } from './user/login/login.component';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { environment } from 'src/environments/environment';
import { AuthService } from './user/service/auth.service';


@NgModule({
  declarations: [
    AppComponent,
    FrontOfficeComponent,
    BackOfficeComponent,
    SignInComponent,
    HomeComponent,
    NavBarComponent,
    FooterComponent,
    ForumComponent,
    DashboardComponent,
    SidebarComponent,
    NavBarBComponent,
    FooterBComponent,
    LoginComponent,
    ChatComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    HttpClientModule,
    NgbModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,

    // ToastrModule.forRoot({
    //   timeOut: 1000,
    //   positionClass: 'toast-bottom-right',
    //   preventDuplicates: true,
    // })
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
