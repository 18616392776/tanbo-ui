import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  displayFormat = 'yyyy-MM-dd hh:mm:ss';
  format = 'yyyy-MM-dd hh:mm:ss';
  minTime = '3:30:12';
  maxTime = '10:34:34';
  minDate = new Date();
  maxDate = '2019-7-1';
  value = '';

  constructor() {
  }

  ngOnInit() {
    // const date = new Date();
    // date.setDate(date.getDate() + 2);
    // this.minDate = date;
  }

}
