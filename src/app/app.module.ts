import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { HeaderComponent } from './header/header.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { EditstudentComponent } from './student/editstudent/editstudent.component';
import { ViewstudentComponent } from './student/viewstudent/viewstudent.component';
import { ListstudentComponent } from './student/liststudent/liststudent.component';
import { AddstudentComponent } from './student/addstudent/addstudent.component';
import { HomeComponent } from './home/home.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AdmindashboardComponent } from './dashboard/admindashboard/admindashboard.component';
import { TeacherdashboardComponent } from './dashboard/teacherdashboard/teacherdashboard.component';
import { StudentdashboardComponent } from './dashboard/studentdashboard/studentdashboard.component';
import { ListteacherComponent } from './teacher/listteacher/listteacher.component';
import { AddteacherComponent } from './teacher/addteacher/addteacher.component';
import { ViewteacherComponent } from './teacher/viewteacher/viewteacher.component';
import { EditteacherComponent } from './teacher/editteacher/editteacher.component';
import { ListdepartmentComponent } from './departments/listdepartment/listdepartment.component';
import { AdddepartmentComponent } from './departments/adddepartment/adddepartment.component';
import { EditdepartmentComponent } from './departments/editdepartment/editdepartment.component';
import { ListsubjectComponent } from './subjects/listsubject/listsubject.component';
import { AddsubjectComponent } from './subjects/addsubject/addsubject.component';
import { EditsubjectComponent } from './subjects/editsubject/editsubject.component';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
  SidenavComponent,
  EditstudentComponent,
  ViewstudentComponent,
  ListstudentComponent,
  AddstudentComponent,
  HomeComponent,
  AdmindashboardComponent,
  TeacherdashboardComponent,
  StudentdashboardComponent,
  ListteacherComponent,
  AddteacherComponent,
  ViewteacherComponent,
  EditteacherComponent,
  ListdepartmentComponent,
  AdddepartmentComponent,
  EditdepartmentComponent,
  ListsubjectComponent,
  AddsubjectComponent,
  EditsubjectComponent,


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
