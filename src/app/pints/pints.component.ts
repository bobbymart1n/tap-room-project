import { Component, OnInit } from '@angular/core';
import { AddKegComponent } from './../add-keg/add-keg.component';
import { Keg } from './../models/keg.model';

@Component({
  selector: 'app-pints',
  templateUrl: './pints.component.html',
  styleUrls: ['./pints.component.css']
})
export class PintsComponent implements OnInit {
  constructor() {}
  ngOnInit() {}

  selectedKeg = null;
  displayKeg(clickedKeg) {
    this.selectedKeg = clickedKeg;
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

  colorCost(currentKeg) {
    if(currentKeg.price > 5){
      return "text-danger";
    } else{
      return "text-warning";
    }
  }
}
