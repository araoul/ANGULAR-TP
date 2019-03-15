import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'chrono',
  templateUrl: './chrono.component.html',
  styleUrls: ['./chrono.component.css']
})
export class ChronoComponent implements OnInit {
  private isStarted = false;
  public mins = 0;
  public secs = 0;
  public centsecs = 0;

  private timer: any;

  constructor() { }

  ngOnInit() {
  }

  private toggle() {
    if (this.isStarted) {
      this.stopTimer();
    } else {
      this.startTimer();
    }

    this.isStarted = !this.isStarted;
  }

  private startTimer() {
    this.timer = setInterval(() => {

      this.centsecs++;

      if (this.centsecs > 99) {
        this.secs++;
        this.centsecs = 0;
      }

      if (this.secs > 59) {
        this.mins++;
        this.secs = 0;
      }

    }, 10);
  }

  private stopTimer() {
    clearInterval(this.timer);
  }

  private reset() {
    this.centsecs = 0;
    this.secs = 0;
    this.mins = 0;
  }

}
