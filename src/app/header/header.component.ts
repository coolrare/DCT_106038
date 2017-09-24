import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  title = 'The Will Will Web';
  link = 'http://blog.miniasp.com/';
  isHighlight = true;

  constructor() { }

  ngOnInit() {
  }

  changeTitle($event) {
    console.log($event);
    $event.stopPropagation();
    this.title = 'Hello';
    this.isHighlight = !this.isHighlight;
  }

  showAlert() {
    // alert('wait');
  }

}
