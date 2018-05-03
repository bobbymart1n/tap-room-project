import {Pipe, PipeTransform} from '@angular/core';
import { Keg } from './models/keg.model';

@Pipe ({
  name: "style",
  pure: false
})

export class StylePipe implements PipeTransform {
  transform(input: Keg[], styleType) {
    let output: Keg[] = [];
    if(styleType === "allStyles"){
      for(let i = 0; i < input.length; i++) {
        output.push(input[i]);
      }
      return output;
    } else if(styleType === "ipa") {
      for(let i = 0; i < input.length; i++) {
        if(input[i].style === "ipa") {
          output.push(input[i]);
        }
      }
      return output;
    } else if(styleType === "lager") {
      for(let i = 0; i < input.length; i++) {
        if(input[i].style === "lager") {
          output.push(input[i]);
        }
      }
      return output;
    } else if(styleType === "porter") {
      for(let i = 0; i < input.length; i++) {
        if(input[i].style === "porter") {
          output.push(input[i]);
        }
      }
      return output;
    } else if(styleType === "blonde") {
      for(let i = 0; i < input.length; i++) {
        if(input[i].style === "blonde") {
          output.push(input[i]);
        }
      }
      return output;
    } else{
      return input;
    }
  }
}
