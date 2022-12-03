import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css']
})
export class CalendarComponent implements OnInit {
  startDate = new Date(1965, 0, 1);
  constructor() { }

  ngOnInit() {
  }

}
