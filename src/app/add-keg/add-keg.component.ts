import { Component, Output, EventEmitter } from '@angular/core';
import { Keg } from '../models/keg.model';

@Component({
  selector: 'app-add-keg',
  templateUrl: './add-keg.component.html',
  styleUrls: ['./add-keg.component.css']
})
export class AddKegComponent{
  @Output() sendKeg = new EventEmitter();
  visible: boolean = false;
  toggle() {
    this.visible = !this.visible;
  }
  addKeg(newName, newBrand, newStyle, newPrice, newAlcoholContent){
    let keg: Keg = new Keg(newName, newBrand, newStyle, newPrice, newAlcoholContent, 124);
    this.sendKeg.emit(keg);
    this.toggle();
  }
  constructor() { }
}
