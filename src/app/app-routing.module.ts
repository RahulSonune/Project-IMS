import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdmindashboardComponent } from './dashboard/admindashboard/admindashboard.component';
import { StudentdashboardComponent } from './dashboard/studentdashboard/studentdashboard.component';
import { TeacherdashboardComponent } from './dashboard/teacherdashboard/teacherdashboard.component';
import { AdddepartmentComponent } from './departments/adddepartment/adddepartment.component';
import { EditdepartmentComponent } from './departments/editdepartment/editdepartment.component';
import { ListdepartmentComponent } from './departments/listdepartment/listdepartment.component';
import { HomeComponent } from './home/home.component';
import { AddstudentComponent } from './student/addstudent/addstudent.component';
import { EditstudentComponent } from './student/editstudent/editstudent.component';
import { ListstudentComponent } from './student/liststudent/liststudent.component';
import { ViewstudentComponent } from './student/viewstudent/viewstudent.component';
import { AddsubjectComponent } from './subjects/addsubject/addsubject.component';
import { EditsubjectComponent } from './subjects/editsubject/editsubject.component';
import { ListsubjectComponent } from './subjects/listsubject/listsubject.component';
import { AddteacherComponent } from './teacher/addteacher/addteacher.component';
import { EditteacherComponent } from './teacher/editteacher/editteacher.component';
import { ListteacherComponent } from './teacher/listteacher/listteacher.component';
import { ViewteacherComponent } from './teacher/viewteacher/viewteacher.component';


const routes: Routes = [
  {path:'',redirectTo:'home', pathMatch:'full'},
  {path:'home', component:HomeComponent},
  {path:'studentdash',component:StudentdashboardComponent},
  {path:'admindash',component:AdmindashboardComponent},
  {path:'teacherdash',component:TeacherdashboardComponent},
  {path:'liststudent',component:ListstudentComponent},
  {path:'addstudent',component:AddstudentComponent},
  {path:'viewstudent',component:ViewstudentComponent},
  {path:'editstudent',component:EditstudentComponent},
  {path:'listteacher',component:ListteacherComponent},
  {path:'editteacher',component:EditteacherComponent},
  {path:'addteacher',component:AddteacherComponent},
  {path:'viewteacher',component:ViewteacherComponent},
  {path:'listdepart',component:ListdepartmentComponent},
  {path:'adddepart',component:AdddepartmentComponent},
  {path:'editdepart',component:EditdepartmentComponent},
  {path:'listsub',component:ListsubjectComponent},
  {path:'addsub',component:AddsubjectComponent},
  {path:'editsub',component:EditsubjectComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
