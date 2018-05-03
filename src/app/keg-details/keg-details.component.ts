import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Keg } from './../models/keg.model';

@Component({
  selector: 'app-keg-details',
  templateUrl: './keg-details.component.html',
  styleUrls: ['./keg-details.component.css']
})
export class KegDetailsComponent {
  @Output() editSender = new EventEmitter();
  @Input() childKeg: Keg[];
  colorCost(currentKeg) {
    if(currentKeg.price > 5){
      return "text-danger";
    } else{
      return "text-warning";
    }
  }
  constructor() {}
  editKegDetails(currentKeg){
    this.editSender.emit(currentKeg);
  }

}
