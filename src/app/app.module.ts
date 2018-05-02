import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { PintsComponent } from './pints/pints.component';
import { NavComponent } from './nav/nav.component';
import { AddKegComponent } from './add-keg/add-keg.component';
import { KegListComponent } from './keg-list/keg-list.component';

@NgModule({
  declarations: [
    AppComponent,
    PintsComponent,
    NavComponent,
    AddKegComponent,
    KegListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
