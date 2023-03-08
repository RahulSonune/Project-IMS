import { NgModule } from '@angular/core';
import{MatSidenavModule}from '@angular/material/sidenav'
import {MatButtonModule} from '@angular/material/button';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import  {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatDividerModule} from '@angular/material/divider';
import {MatListModule} from '@angular/material/list';
import {MatMenuModule} from '@angular/material/menu';

const MaterialComponents=[
  MatButtonModule,
  BrowserAnimationsModule,
  MatSidenavModule,
  MatToolbarModule,
  MatIconModule,
  MatDividerModule,
  MatListModule,
  MatMenuModule

]

@NgModule({
  
  imports: [
    MaterialComponents,
   
    
  ],
  exports:[
    MaterialComponents
  ]
})
export class MaterialModule { }
