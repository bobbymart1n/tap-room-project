import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { NavComponent } from './nav/nav.component';
import { AddKegComponent } from './add-keg/add-keg.component';
import { KegListComponent } from './keg-list/keg-list.component';
import { KegDetailsComponent } from './keg-details/keg-details.component';
import { EditKegComponent } from './edit-keg/edit-keg.component';
import { StylePipe } from './style.pipe';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    AddKegComponent,
    KegListComponent,
    KegDetailsComponent,
    EditKegComponent,
    StylePipe
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
