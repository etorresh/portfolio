import {Component, ElementRef, HostListener, OnInit, ViewChild} from '@angular/core';
import {animate, state, style, transition, trigger} from "@angular/animations";
import {Carousel} from "./models/Carousel";
import Swal from 'sweetalert2';

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
    ]),
    trigger('nextColor', [
      state('0', style({
        color: 'black'
      })),
      state('1', style({
        // blue
        color: '#2472A3'
      })),
      state('2', style({
        // orange
        color: '#CC6900'
      })),
      state('3', style({
        // green
        color: '#5C946E'
      })),
      state('4', style({
        // red
        color: '#EF6351'
      })),
      transition('* => *', [
        animate('0.5s ease-in')
      ])
    ])
  ]
})
export class AppComponent implements OnInit {
  title = "Emilio Torres";

  repulseDistance = 300;
  x = 0;
  y = 0;
  scrollYOffset = 0;
  public carousel = new Carousel(['assets/myFace/myFace1.webp', 'assets/myFace/myFace2.webp', 'assets/myFace/myFace3.webp', 'assets/myFace/myFace4.webp']);
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

  public lettersColor = new Array(13).fill(0);

  ngOnInit() {
    console.log('%c Hello! \n Thank you for visiting my portfolio.\n There\'s nothing else to see in the console, but I\'m glad you checked.\n Oh! Before you go, I also want to let you know that I\'m looking for new opportunities. Feel free to reach out! \n Have a great day!', 'background: #222; color: #bada55');
  }

  @HostListener('window:scroll', ['$event'])
  onScroll() {
    this.scrollYOffset = -window.scrollY;
  }

  onCardHover(event: MouseEvent, cardId: number) {
    clearInterval(this.repulseTimer);
    switch (cardId) {
      case 1: {
        this.x = this.card1?.nativeElement.offsetLeft + 150;
        this.y = this.card1?.nativeElement.offsetTop + 88;
        break;
      }
      case 2: {
        this.x = this.card2?.nativeElement.offsetLeft + 150;
        this.y = this.card2?.nativeElement.offsetTop + 88;
        break;
      }
      case 3: {
        this.x = this.card3?.nativeElement.offsetLeft + 150;
        this.y = this.card3?.nativeElement.offsetTop + 88;
        break;
      }
      case 4: {
        this.x = this.card4?.nativeElement.offsetLeft + 150;
        this.y = this.card4?.nativeElement.offsetTop + 88;
        break;
      }
      case 5: {
        this.x = this.card5?.nativeElement.offsetLeft + 150;
        this.y = this.card5?.nativeElement.offsetTop + 88;
        break;
      }
      case 6: {
        this.x = this.card6?.nativeElement.offsetLeft + 150;
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

  swalTravelpal() {
    Swal.fire({
      title: 'Full Stack Developer',
      confirmButtonColor: '#2472a3',
      html: '<div style="text-align: left">' +
        'Our main task was to develop a web app MVP for hotel guests to book a room, view room layouts, ' +
        'reserve hotel activities, order room service, and interact with a hotel map.' +
        '<ul>' +
        '<li>Wrote and styled the Angular components to meet the requirements of our mocks.</li>' +
        '<li>Worked alongside another developer to create an API using .NET Core Web API.</li>' +
        '<li>Implemented the API endpoints to the front-end.</li>' +
        '<li>Built extensive test coverage for all new and old features.</li>' +
        '</ul>' +
        '</div>',
    })
  }


  swalScubaCode() {
    Swal.fire({
      title: 'Intern Full Stack Developer',
      confirmButtonColor: '#2472a3',
      html: '<div style="text-align: left">' +
        'During my last year of high school in 2019 until my first semester of university in December 2020, I interned at ScubaCode. ' +
        'My tasks were to add features to an existing ERP. ' +
        '<ul>' +
        '<li>Created UI with React for an internal web app that managed venues, automated sales reports, and controlled inventory.</li>' +
        '<li>Developed backend services using ASP.NET Web API, EFcore, and PostgreSQL.</li>' +
        '<li>Automated the deployment of servers changes using Python.</li>' +
        '<li>Worked on automating deployment validation scripts which reduced manual effort in deployments.</li>' +
        '</ul>' +
        '</div>',
    })
  }

  swalRocSystems() {
    Swal.fire({
      title: 'Intern Software Developer',
      confirmButtonColor: '#2472a3',
      html: '<div style="text-align: left">' +
        'During high school, I interned at RocSystems. I was able to work on a variety of different projects and learn from a great team. ' +
        'My main tasks involved web development using PHP and jQuery, and Python using a Raspberry Pi.' +
        '<ul>' +
        '<li>Added back-end and front-end features to a web application using PHP and jQuery.</li>' +
        '<li>Developed an automated sales report system using PHP.</li>' +
        '<li>Automated the deployment of servers changes using Python.</li>' +
        '<li>Decreased user wait time by introducing multithreading to the existing software using Python.</li>' +
        '</ul>' +
        '</div>',
    })
  }

  public changeColor(charId : number, infect = true) {
    console.log(charId);
    if (this.lettersColor[charId] == 4) {
      this.lettersColor[charId] = 0;
    } else{
      this.lettersColor[charId]++;
    }
    if(infect) {
      if (charId != this.lettersColor.length-1) this.changeColor(charId + 1, false);
      if (charId != 0) this.changeColor(charId - 1, false);
    }
  }
}
