import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'
import { EmployeeService } from './service/employee.service'
import { HttpClientModule } from "@angular/common/http";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Test2Component } from './components/test2/test2.component';
import { TestComponent } from './components/test/test.component';
import { PagenotfoundComponent } from './components/pagenotfound/pagenotfound.component';
import { HomepageComponent } from './components/homepage/homepage.component';
import { TestdetailComponent } from './components/testdetail/testdetail.component';
import { DepartmentOverviewComponent } from './component/department-overview/department-overview.component';
import { DepartmentContactComponent } from './component/department-contact/department-contact.component';

@NgModule({
  declarations: [
    AppComponent,
    Test2Component,
    TestComponent,
    PagenotfoundComponent,
    HomepageComponent,
    TestdetailComponent,
    DepartmentOverviewComponent,
    DepartmentContactComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    EmployeeService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
