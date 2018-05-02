import { Component, OnInit } from '@angular/core';
import { Keg } from './../models/keg.model';

@Component({
  selector: 'app-pints',
  templateUrl: './pints.component.html',
  styleUrls: ['./pints.component.css']
})
export class PintsComponent implements OnInit {
  constructor() {}
  ngOnInit() {}
  visible: boolean = false;
  toggle() {
    this.visible = !this.visible;
  }
  kegs: Keg[] = [
    new Keg('RPM' ,'Boneyard', 6, 6.5, 12)
  ];
  selectedKeg = null;
  displayKeg(clickedKeg) {
    this.selectedKeg = clickedKeg;
  }
  addKeg(newName, newBrand, newPrice, newAlcoholContent){
    let keg = new Keg(newName, newBrand, newPrice, newAlcoholContent, 124);
    this.kegs.push(keg);
    this.toggle();
  }
  editKeg = null;
  displayEdit(clickedKeg) {
    this.editKeg = clickedKeg;
  }
  finishedEdit() {
    this.editKeg = null;
  }
  sellPint(currentKeg){
    currentKeg.pints--;
  }
  priorityColor(currentKeg){
    if(currentKeg.pints <= 10){
      return "text-danger";
    }
  }
}
