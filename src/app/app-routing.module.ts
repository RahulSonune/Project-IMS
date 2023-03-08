import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HomeComponent } from './home/home.component';
import { AddstudentComponent } from './student/addstudent/addstudent.component';
import { EditstudentComponent } from './student/editstudent/editstudent.component';
import { ListstudentComponent } from './student/liststudent/liststudent.component';
import { ViewstudentComponent } from './student/viewstudent/viewstudent.component';


const routes: Routes = [
  {path:'',redirectTo:'home', pathMatch:'full'},
  {path:'home', component:HomeComponent},
  {path:'dashboard', component:DashboardComponent},
  {path:'liststudent',component:ListstudentComponent},
  {path:'addstudent',component:AddstudentComponent},
  {path:'viewstudent',component:ViewstudentComponent},
  {path:'editstudent',component:EditstudentComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
