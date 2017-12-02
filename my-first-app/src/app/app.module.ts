import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { DragulaModule } from 'ng2-dragula';

import { AppComponent } from './app.component';
import { appRouting } from './app.routes';
import {BaseApiService } from './common/servies/http.service';
import {GuitarModule } from './guitar/guitar.module';



@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    DragulaModule,
    appRouting,
    //custom
    GuitarModule,
  ],
  providers: [BaseApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
