import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { RouterModule } from '@angular/router';
import { MaterialModule } from './material/material.module';
import { FlashMessagesModule } from 'angular2-flash-messages';
import { JwtModule } from '@auth0/angular-jwt';

import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { RegistrationComponent } from './components/registration/registration.component';
import { HomeComponent } from './components/home/home.component';
import { TaskComponent } from './components/task/task.component';
import { CreateComponent } from './components/create/create.component';
import { AsideComponent } from './components/aside/aside.component';
import { HeaderComponent } from './components/header/header.component';
import { MainComponent } from './components/main/main.component';
import { EditComponent } from './components/edit/edit.component';

import { TodoListService } from './services/todo/todolist.service';
import { StoreService } from './services/store/store.service';
import { UserService } from './services/user/user.service';

import { TodosSearchPipe } from './pipes/filter.pipe';
import { AuthGuard } from './helpers/auth.guard';


@NgModule({
  declarations: [
    AppComponent,
    TaskComponent,
    CreateComponent,
    AsideComponent,
    HeaderComponent,
    MainComponent,
    EditComponent,
    LoginComponent,
    RegistrationComponent,
    HomeComponent,
    TodosSearchPipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MaterialModule,
    ReactiveFormsModule,
    FlashMessagesModule.forRoot(),
    JwtModule.forRoot({
      config: {
        tokenGetter: function  tokenGetter() {
          return     localStorage.getItem('userAuthData'); },
        whitelistedDomains: [],
        blacklistedRoutes: [],
      }
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
