import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsComponent } from './components/forms/forms.component';
import { HomeComponent } from './components/home/home.component';
import { PagenotfoundComponent } from './components/pagenotfound/pagenotfound.component';
import { NewUserServer } from './server/new-user-server.service';
import { UserComponent } from './components/user/user.component'

@NgModule({
  declarations: [
    AppComponent,
    FormsComponent,
    HomeComponent,
    PagenotfoundComponent,
    UserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [NewUserServer],
  bootstrap: [AppComponent]
})
export class AppModule { }
