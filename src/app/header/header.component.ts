import { Component, OnInit } from '@angular/core';
import {
  animate,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';
import { Carousel } from '../models/Carousel';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  animations: [
    trigger('nextFace', [
      state(
        'show',
        style({
          bottom: 0,
        })
      ),
      state(
        'hide',
        style({
          bottom: '250px',
        })
      ),
      transition('show => hide', [animate('0.5s ease-in')]),
      transition('hide => show', [animate('0.5s ease-out')]),
    ]),
    trigger('nextColor', [
      state(
        '0',
        style({
          color: 'black',
        })
      ),
      state(
        '1',
        style({
          // blue
          color: '#2472A3',
        })
      ),
      state(
        '2',
        style({
          // orange
          color: '#CC6900',
        })
      ),
      state(
        '3',
        style({
          // green
          color: '#5C946E',
        })
      ),
      state(
        '4',
        style({
          // red
          color: '#EF6351',
        })
      ),
      transition('* => *', [animate('0.5s ease-in')]),
    ]),
  ],
})
export class HeaderComponent {
  public carousel = new Carousel([
    'assets/myFace/myFace1.webp',
    'assets/myFace/myFace2.webp',
    'assets/myFace/myFace3.webp',
    'assets/myFace/myFace4.webp',
  ]);
  public lettersColor = new Array(13).fill(0);

  public changeColor(charId: number, infect = true) {
    if (this.lettersColor[charId] == 4) {
      this.lettersColor[charId] = 0;
    } else {
      this.lettersColor[charId]++;
    }
    if (infect) {
      if (charId != this.lettersColor.length - 1)
        this.changeColor(charId + 1, false);
      if (charId != 0) this.changeColor(charId - 1, false);
    }
  }
}
