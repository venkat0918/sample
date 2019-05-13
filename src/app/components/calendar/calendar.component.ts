import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';
import { ChangeDetectionStrategy, ViewEncapsulation } from '@angular/core';
import { CalendarEvent, CalendarMonthViewDay, CalendarDateFormatter } from 'angular-calendar';
import { CustomDateFormatter } from './custom-date';
import{ isWithinRange} from 'date-fns';
@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
  styleUrls: ['./calendar.component.scss'],
  providers: [
    {
      provide: CalendarDateFormatter,
      useClass: CustomDateFormatter
    }
  ]
})




export class CalendarComponent implements OnInit {
  view: string = 'month';
  viewDate: Date = new Date();
  events: CalendarEvent[] = [];
  clickedDate: Date;

  freezDate = [
    {
      start: '10/10/2018',
      end: '10/15/2018'
    },
    {
      start: '11/11/2018',
      end: '11/18/2018'
    }
  ]

 

  beforeMonthViewRender({ body }: { body: CalendarMonthViewDay[] }): void {
    body.forEach(day => {
      this.freezDate.forEach(x => {
        const start = new Date(x.start);
        const end = new Date(x.end)
        if(isWithinRange(new Date(day.date), start, end)){
          day.backgroundColor= '#4286f4'
        }
      })
    });
  }
  constructor() { }

  ngOnInit() {
  }

}
