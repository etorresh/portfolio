import {Component} from '@angular/core';
import {animate, state, style, transition, trigger} from "@angular/animations";
import {Carousel} from "./models/Carousel";

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
  public carousel = new Carousel(['assets/myFace/myFace1.jpg', 'assets/myFace/myFace2.png', 'assets/myFace/myFace3.jpg', 'assets/myFace/myFace4.png']);
}
