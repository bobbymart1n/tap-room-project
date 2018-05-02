import { Component } from '@angular/core';
import { PintsComponent } from './pints/pints.component';
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
    new Keg('RPM' ,'Boneyard', 6, 6.5, 124)
  ];
  addKeg(newKeg: Keg){
    this.masterKegList.push(newKeg);
  }

}
