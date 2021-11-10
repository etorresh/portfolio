import { Component } from '@angular/core';
import {animate, state, style, transition, trigger} from "@angular/animations";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [
    trigger('nextFace', [
      state('show', style({
        bottom: 0
      })),
      state('hide', style({
        bottom: '250px'
      })),
      transition('show => hide', [
        animate('0.5s ease-in')
      ]),
      transition('hide => show', [
        animate('0.5s ease-out')
      ])
    ])
  ]
})
export class AppComponent {
  currentFace = 0;
  restartFace = false;
  myFaces = [true, false, false, false];
  onFaceClick() {
    this.myFaces[this.currentFace] = false;
    if(this.currentFace == this.myFaces.length - 1) {
      this.restartFace = true;
      this.currentFace = 0;
    } else {
      this.restartFace = false;
      this.currentFace++;
    }
    this.myFaces[this.currentFace] = true;
  }
}
