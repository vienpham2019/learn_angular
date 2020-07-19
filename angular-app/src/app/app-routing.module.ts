import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TestComponent } from './components/test/test.component';
import { Test2Component } from './components/test2/test2.component';


const routes: Routes = [
  {path: 'test-component' , component: TestComponent},
  {path: 'test2-component' , component: Test2Component}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
