import { Component } from '@angular/core';
import { Keg } from './models/keg.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  kegs: Keg[] = [
    new Keg('RPM' ,'Boneyard', 6, 6.5),
    new Keg('Breakside IPA', 'Breakside', 6, 6.2),
    new Keg('Mirror Pond Pale Ale', 'Deschutes', 5, 5)
  ];
  selectedKeg = null;
  displayKeg(clickedKeg) {
    this.selectedKeg = clickedKeg;
  }
  addKeg(newName, newBrand, newPrice, newAlcoholContent){
    let keg = new Keg(newName, newBrand, newPrice, newAlcoholContent);
    this.kegs.push(keg);
  }
}
