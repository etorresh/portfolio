import {
  Component,
  ElementRef,
  HostListener,
  OnInit,
  ViewChild,
} from '@angular/core';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  repulseDistance = 300;
  x = 0;
  y = 0;
  scrollYOffset = 0;
  private repulseTimer: any;
  public repulseScale = 0;
  public coverOpacity = 1;
  public speedScale = 1;
  public showParticles = true;
  @ViewChild('card1') card1: ElementRef | undefined;
  @ViewChild('card2') card2: ElementRef | undefined;
  @ViewChild('card3') card3: ElementRef | undefined;
  @ViewChild('card4') card4: ElementRef | undefined;
  @ViewChild('card5') card5: ElementRef | undefined;
  @ViewChild('card6') card6: ElementRef | undefined;

  ngOnInit() {
    this.showParticles = innerWidth <= 2000;
  }

  @HostListener('window:scroll', ['$event'])
  onScroll() {
    this.scrollYOffset = -window.scrollY;
  }

  @HostListener('window:resize', ['$event'])
  onResize() {
    this.showParticles = innerWidth <= 2000;
  }

  onCardHover(_event: MouseEvent, cardId: number) {
    clearInterval(this.repulseTimer);
    if (this.repulseScale > 0.6) this.repulseScale = 0.6;
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
    this.repulseTimer = setInterval(() => {
      if (!(this.coverOpacity > 0) && !(this.repulseScale < 1)) {
        clearInterval(this.repulseTimer);
      }
      if (this.repulseScale < 1) {
        this.repulseScale += 0.02;
      } else {
        this.speedScale = 0.2;
      }
      if (this.coverOpacity > 0) {
        this.coverOpacity -= 0.02;
      }
    }, 10);
  }

  onCardLeave() {
    clearInterval(this.repulseTimer);
    this.speedScale = 1;
    this.repulseTimer = setInterval(() => {
      if (!(this.repulseScale > 0) && !(this.coverOpacity < 1)) {
        clearInterval(this.repulseTimer);
      }
      if (this.repulseScale > 0) {
        this.repulseScale -= 0.01;
      }
      if (this.coverOpacity < 1) {
        this.coverOpacity += 0.01;
      }
    }, 30);
  }

  swalTravelpal() {
    Swal.fire({
      title: 'Angular Front-End Intern',
      confirmButtonColor: '#2472a3',
      html:
        '<div style="text-align: left">' +
        'Our main task was to develop a web app MVP for hotel guests to book a room, view room layouts, ' +
        'reserve hotel activities, order room service, and interact with a hotel map.' +
        '<ul>' +
        '<li>Led the design and development of robust Angular components, aligning with project specifications.</li>' +
        '<li>Assisted in integrating the back-end responses with the front-end.</li>' +
        '<li>Employed best practices in writing comprehensive unit tests for all new features and existing ones, ensuring high code quality and application reliability.</li>' +
        '</ul>' +
        '</div>',
    });
  }

  swalScubaCode() {
    Swal.fire({
      title: 'Intern Full Stack Developer',
      confirmButtonColor: '#2472a3',
      html:
        '<div style="text-align: left">' +
        'During my last year of high school in 2019 until my first semester of university in December 2020, I interned at ScubaCode. ' +
        'My tasks were to add features to an existing ERP. ' +
        '<ul>' +
        '<li>Created UI with React for an internal web app that managed venues, automated sales reports, and controlled inventory.</li>' +
        '<li>Developed backend services using ASP.NET Web API, EFcore, and PostgreSQL.</li>' +
        '<li>Automated the deployment of servers changes using Python.</li>' +
        '<li>Worked on automating deployment validation scripts which reduced manual effort in deployments.</li>' +
        '</ul>' +
        '</div>',
    });
  }

  swalRocSystems() {
    Swal.fire({
      title: 'Software Development Intern',
      confirmButtonColor: '#2472a3',
      html:
        '<div style="text-align: left">' +
        'During high school, I interned at RocSystems. I was able to work on a variety of different projects and learn from a great team. ' +
        'My main tasks involved web development using PHP and JavaScript, and Python using a Raspberry Pi.' +
        '<ul>' +
        '<li>Enhanced the functionality of a web application by implementing dynamic features using PHP and JavaScript, improving user experience and site efficiency.</li>' +
        '<li>Developed an automated sales reporting system using PHP, streamlining business processes and improving the accuracy of sales data.</li>' +
        '<li>Leveraged Python to automate server deployment processes, significantly reducing manual effort and potential errors.</li>' +
        '<li>Optimized application performance and improved user experience by implementing multithreading in the existing Python-based software.</li>' +
        '</ul>' +
        '</div>',
    });
  }
}
