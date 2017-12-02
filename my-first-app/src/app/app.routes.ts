import {Routes, RouterModule} from '@angular/router';
import {GuitarListComponent } from './guitar/guitar-list/guitar-list.component';
import { GuitarDetailsComponent } from './guitar/guitar-details/guitar-details.component';


const ROUTES: Routes =  [
 { path: '', component: GuitarListComponent },
 { path:'guitar/:id',component: GuitarDetailsComponent }
];


export const appRouting= RouterModule.forRoot(ROUTES);