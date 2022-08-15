import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'Emilio Torres';
  ngOnInit() {
    console.log(
      "%c Hello! \n Thank you for visiting my portfolio.\n There's nothing else to see in the console, but I'm glad you checked.\n Oh! Before you go, I also want to let you know that I'm looking for new opportunities. Feel free to reach out! \n Have a great day!",
      'background: #222; color: #bada55'
    );
  }
}
