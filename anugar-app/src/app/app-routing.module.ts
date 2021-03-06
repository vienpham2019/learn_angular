import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormsComponent } from './components/forms/forms.component';
import { HomeComponent } from './components/home/home.component';
import { PagenotfoundComponent } from './components/pagenotfound/pagenotfound.component';
import { UserComponent } from './components/user/user.component';

const routes: Routes = [
  {path: '' , redirectTo: '/home' , pathMatch: 'full'},
  {path: 'forms' , component: FormsComponent},
  {path: 'home' , component: HomeComponent},
  {path: 'user/:id' , component: UserComponent},
  {path: '**', component: PagenotfoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
