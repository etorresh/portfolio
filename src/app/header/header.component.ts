import { Component, OnInit } from '@angular/core';
import {
  animate,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';
import { Carousel } from '../models/Carousel';
import { ActivatedRoute, Router } from '@angular/router';
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
export class HeaderComponent implements OnInit {
  constructor(private router: Router, private route: ActivatedRoute) {}
  faceUrls = [
    'assets/myFace/myFace1.webp',
    'assets/myFace/myFace2.webp',
    'assets/myFace/myFace3.webp',
    'assets/myFace/myFace4.webp',
  ];

  private faceId = 0;
  public carousel = new Carousel(this.faceUrls);
  public lettersColor = new Array(13).fill(0);

  ngOnInit(): void {
    const url = new URL(window.location.href);

    const faceIdParam = Number(url.searchParams.get('face'));
    if (
      faceIdParam !== 0 &&
      faceIdParam !== NaN &&
      faceIdParam >= 0 &&
      faceIdParam <= 3
    ) {
      this.carousel = new Carousel([
        this.faceUrls[faceIdParam],
        this.faceUrls[(faceIdParam + 1) % 4],
        this.faceUrls[(faceIdParam + 2) % 4],
        this.faceUrls[(faceIdParam + 3) % 4],
      ]);
      this.faceId = faceIdParam;
    }
    const colorsParam = url.searchParams.get('colors')?.split('').map(Number);
    if (
      colorsParam !== undefined &&
      colorsParam.length <= 13 &&
      colorsParam.every((element) => {
        return (
          element === 0 ||
          element === 1 ||
          element === 2 ||
          element === 3 ||
          element === 4
        );
      })
    ) {
      this.lettersColor = colorsParam;
    }
  }

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
    if (infect) {
      this.updateQueryParams();
    }
  }

  public changeFace() {
    this.carousel.nextImage();
    this.faceId = (this.faceId + 1) % 4;
    this.updateQueryParams();
  }

  private updateQueryParams() {
    let faceParam: Number | undefined;
    let colorsParam: string | undefined;
    if (this.faceId != 0) {
      faceParam = this.faceId;
    }
    if (!this.lettersColor.every((element) => element === 0)) {
      colorsParam = this.lettersColor.join('');
    }
    this.router.navigate([], {
      relativeTo: this.route,
      queryParams: { face: faceParam, colors: colorsParam },
      queryParamsHandling: 'merge',
      replaceUrl: true,
    });
  }
}
