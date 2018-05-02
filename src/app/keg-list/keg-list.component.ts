import { Component, Input } from '@angular/core';
import { Keg } from './../models/keg.model';


@Component({
  selector: 'app-keg-list',
  templateUrl: './keg-list.component.html',
  styleUrls: ['./keg-list.component.css']
})
export class KegListComponent {
  @Input() childKegList: Keg[];
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

}
