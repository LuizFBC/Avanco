import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {BlogModule} from './blog/BlogModule';
import {MatCardModule} from "@angular/material/card";
import {MatIconModule} from "@angular/material/icon";
import {MatBottomSheetModule} from "@angular/material/bottom-sheet";
import {MatToolbarModule} from "@angular/material/toolbar";
import {CommonMaterialModules} from "./blog/common/material/CommonMaterialModules";

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    MatToolbarModule,
    CommonMaterialModules,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    BlogModule,
  ],
  // exports : [
  // ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
