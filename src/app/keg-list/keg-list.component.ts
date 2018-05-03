import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Keg } from './../models/keg.model';

@Component({
  selector: 'app-keg-list',
  templateUrl: './keg-list.component.html',
  styleUrls: ['./keg-list.component.css']
})
export class KegListComponent {
  @Input() childKegList: Keg[];
  @Output() clickSender = new EventEmitter();
  constructor() { }
  priorityColor(currentKeg){
    if(currentKeg.pints <= 10){
      return "text-danger";
    }
  }
  alcoholContentHighlight(currentKeg) {
    if(currentKeg.alcoholContent > 6) {
      return "high-alcohol"
    }
  }
  sellPint(currentKeg){
    currentKeg.pints--;
  }
  displayKegDetails(clickedKeg) {
    this.clickSender.emit(clickedKeg);
  }
  filterByStyle: string = "allStyles";
  onChange(optionFromMenu){
    this.filterByStyle = optionFromMenu;
  }
}
