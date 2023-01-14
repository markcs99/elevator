import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-disk-scheduler',
  templateUrl: './disk-scheduler.component.html',
  styleUrls: ['./disk-scheduler.component.css']
})
export class DiskSchedulerComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  requests = [176, 79, 34, 60, 92, 11, 41, 114];
  head = 50;
  direction = 'left';
  seekCount = 0;
  seekSequence: number[] = [];

  onScanValues() {
    this.direction = 'left';
    this.seekCount = 0;
    this.seekSequence = [];

    let requests = this.requests.map(r => Number(r)).filter(r => !isNaN(r));
    let head = Number(this.head);
    let left = [], right = [];

    // appending end values which has to be visited before reversing the direction
    if (this.direction == 'left') {
      left.push(0);
    } else if (this.direction == 'right') {
      right.push(200 - 1);
    }

    for (let i = 0; i < requests.length; i++) {
      if (requests[i] < head) {
        left.push(requests[i]);
      }
      if (requests[i] > head) {
        right.push(requests[i]);
      }
    }

    // sorting left and right vectors
    left.sort((a, b) => a - b);
    right.sort((a, b) => a - b);

    // run the while loop two times. one by one scanning right and left of the head
    let run = 2;
    while (run-- > 0) {
      if (this.direction == 'left') {
        for (let i = left.length - 1; i >= 0; i--) {
          let curTrack = left[i];

          // appending current track to seek sequence
          this.seekSequence.push(curTrack);

          // calculate absolute distance
          let distance = Math.abs(curTrack - head);

          // increase the total count
          this.seekCount += distance;

          // accessed track is now the new head
          head = curTrack;
        }
        this.direction = 'right';
      } else if (this.direction == 'right') {
        for (let i = 0; i < right.length; i++) {
          let curTrack = right[i];

          // appending current track to seek sequence
          this.seekSequence.push(curTrack);

          // calculate absolute distance
          let distance = Math.abs(curTrack - head);

          // increase the total count
          this.seekCount += distance;

          // accessed track is now new head
          head = curTrack;
        }
        this.direction = 'left';
      }
    }
  }

}
