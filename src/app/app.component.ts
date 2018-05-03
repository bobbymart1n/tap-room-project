import { Component } from '@angular/core';
import { NavComponent } from './nav/nav.component';
import { Keg } from './models/keg.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor() {}
  masterKegList: Keg[] = [
    new Keg('RPM' ,'Boneyard', 'ipa' , 6, 6.5, 124)
  ];
  addKeg(newKeg: Keg){
    this.masterKegList.push(newKeg);
  }
  selectedKeg = null;
  displayKeg(clickedKeg) {
    this.selectedKeg = clickedKeg;
  }
  selectedEdit = null;
  displayEdit(clickedEdit){
    this.selectedEdit = clickedEdit;
  }
  finishedEditing() {
    this.selectedEdit = null;
  }
}
