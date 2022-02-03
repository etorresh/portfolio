import {Component, ElementRef, HostListener, ViewChild} from '@angular/core';
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
  repulseDistance = 300;
  x = 0;
  y = 0;
  scrollYOffset = 0;
  public carousel = new Carousel(['assets/myFace/myFace1.jpg', 'assets/myFace/myFace2.png', 'assets/myFace/myFace3.jpg', 'assets/myFace/myFace4.png']);
  private repulseTimer: any;
  public repulseScale = 0;
  public speedScale = 1;
  public whiteBackground = true;

  @ViewChild('card1') card1 : ElementRef | undefined;
  @ViewChild('card2') card2: ElementRef | undefined;
  @ViewChild('card3') card3: ElementRef | undefined;
  @ViewChild('card4') card4 : ElementRef | undefined;
  @ViewChild('card5') card5: ElementRef | undefined;
  @ViewChild('card6') card6: ElementRef | undefined;

  @HostListener('window:scroll', ['$event'])
  onScroll() {
    this.scrollYOffset = -window.scrollY;
  }

  onCardHover(event: MouseEvent, cardId: number) {
    clearInterval(this.repulseTimer);
    // change repulse position depending on card hovered
    switch (cardId) {
      case 1: {
        this.x = this.card1?.nativeElement.offsetLeft + 165;
        this.y = this.card1?.nativeElement.offsetTop + 88;
        break;
      }
      case 2: {
        this.x = this.card2?.nativeElement.offsetLeft + 165;
        this.y = this.card2?.nativeElement.offsetTop + 88;
        break;
      }
      case 3: {
        this.x = this.card3?.nativeElement.offsetLeft + 165;
        this.y = this.card3?.nativeElement.offsetTop + 88;
        break;
      }
      case 4: {
        this.x = this.card4?.nativeElement.offsetLeft + 165;
        this.y = this.card4?.nativeElement.offsetTop + 88;
        break;
      }
      case 5: {
        this.x = this.card5?.nativeElement.offsetLeft + 165;
        this.y = this.card5?.nativeElement.offsetTop + 88;
        break;
      }
      case 6: {
        this.x = this.card6?.nativeElement.offsetLeft + 165;
        this.y = this.card6?.nativeElement.offsetTop + 88;
        break;
      }
    }
    this.whiteBackground = false;
    this.repulseTimer = setInterval(() => {
      if(this.repulseScale < 1) {
        this.repulseScale += 0.02;
      } else {
        this.speedScale = 0;
        clearInterval(this.repulseTimer);
      }
    }, 10);
  }


  onCardLeave() {
    clearInterval(this.repulseTimer);
    console.log(this.repulseScale);
    this.speedScale = 1;
    this.repulseTimer = setInterval(() => {
      if (this.repulseScale > 0) {
        this.repulseScale -= 0.01;
      }
      else {
        this.whiteBackground = true;
        clearInterval(this.repulseTimer);
      }
    }, 30);
  }
}
