import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DragulaModule } from 'ng2-dragula';
import { FormsModule } from '@angular/forms';
import {RouterModule} from '@angular/router';
import { GuitarListComponent } from './guitar-list/guitar-list.component';
import { GuitarDetailsComponent } from './guitar-details/guitar-details.component';


@NgModule({
  imports: [
    CommonModule,
    DragulaModule,
    FormsModule,
    RouterModule
  ],
  declarations: [GuitarListComponent, GuitarDetailsComponent]
})
export class GuitarModule { }
