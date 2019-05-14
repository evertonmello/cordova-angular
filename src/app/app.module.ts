import { BrowserModule } from '@angular/platform-browser';
import { NgModule  } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import {MaterialModule} from './material.module';

import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { NewAccountComponent } from './components/new-account/new-account.component';

const appRoutes: Routes = [
  { path: 'login',      component: LoginComponent,data: {animation: 'newAccount'} },
  { path: 'newAccount', component: NewAccountComponent,  data: {animation: 'newAccount'}},
  { path: '**', component: LoginComponent}
];


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    NewAccountComponent,
  ],
  imports: [
    BrowserModule,
    MaterialModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(appRoutes)
  ],
  exports:[RouterModule],
  providers: [],
  entryComponents: [AppComponent],
  bootstrap: [AppComponent],

})
export class AppModule { }
