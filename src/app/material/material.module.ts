import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatListModule} from '@angular/material/list';

const materialComponents=[
  MatToolbarModule,MatSidenavModule,MatListModule
]

@NgModule({
  
  imports: [
   materialComponents
  ],
  exports:[
  materialComponents
  ]
})
export class MaterialModule { }
