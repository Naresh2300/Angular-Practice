import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TestcompComponent } from './testcomp/testcomp.component';
import { ChildComponent } from './child/child.component';
import { ParentComponent } from './parent/parent.component';
//import { Employee } from './employee';

@NgModule({
  declarations: [
    AppComponent,
    TestcompComponent,
    ChildComponent,
    ParentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ], 
  //providers: [Employee],
  bootstrap: [AppComponent]
})
export class AppModule { }
