import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule } from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegistrationEmployeeComponent } from './registration-employee/registration-employee.component';
import { FormsModule } from '@angular/forms';
import { UpdateEmployeeComponent } from './update-employee/update-employee.component';
import { LeaveReportEmployeeComponent } from './leave-report-employee/leave-report-employee.component';
import { AddProjectComponent } from './add-project/add-project.component';
import { AddSalaryComponent } from './add-salary/add-salary.component';
import { SidebarComponent } from './sidebar/sidebar.component';

@NgModule({
  declarations: [
    AppComponent,
    EmployeeListComponent,
    HomeComponent,
    LoginComponent,
    RegistrationEmployeeComponent,
    UpdateEmployeeComponent,
    LeaveReportEmployeeComponent,
    AddProjectComponent,
    AddSalaryComponent,
    SidebarComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
