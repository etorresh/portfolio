import {AfterViewInit, Component, ElementRef, HostListener, ViewChild} from '@angular/core';
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
  title = "Emilio Torres";
  repulseDistance = 0;
  x = 0;
  y = 0;
  scrollYOffset = 0;
  public carousel = new Carousel(['assets/myFace/myFace1.jpg', 'assets/myFace/myFace2.png', 'assets/myFace/myFace3.jpg', 'assets/myFace/myFace4.png']);
  @ViewChild('card1') card1 : ElementRef | undefined ;

  @HostListener('window:scroll', ['$event'])
  onScroll() {
    this.scrollYOffset = -window.scrollY;
  }

  onCardHover(event: MouseEvent, cardId: number) {
    switch (cardId) {
      case 1: {
        this.x = this.card1?.nativeElement.offsetLeft + 165;
        this.y = this.card1?.nativeElement.offsetTop + 88
      }
    }
    this.repulseDistance = 300;
  }
  onCardLeave() {
    this.repulseDistance = 0;
  }
}
