import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TestComponent } from './components/test/test.component';
import { Test2Component } from './components/test2/test2.component';
import { PagenotfoundComponent } from './components/pagenotfound/pagenotfound.component';
import { HomepageComponent } from './components/homepage/homepage.component';
import { TestdetailComponent } from './components/testdetail/testdetail.component';


const routes: Routes = [
  {path: '' , redirectTo: '/home' , pathMatch: 'full' },
  {path: 'home' , component: HomepageComponent},
  {path: 'test-component' , component: TestComponent},
  {path: 'test2-component' , component: Test2Component},
  {path: 'test-detail/:id' , component: TestdetailComponent},
  {path: '**' , component: PagenotfoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
