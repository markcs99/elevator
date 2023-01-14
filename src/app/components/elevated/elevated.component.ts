import { Component, OnInit } from '@angular/core';
import {Elevator} from "../../models/elevator";

@Component({
  selector: 'app-elevated',
  templateUrl: './elevated.component.html',
  styleUrls: ['./elevated.component.css']
})
export class ElevatedComponent {
  public elevator: Elevator;
  public logs: string[];

  constructor() {
    this.elevator = new Elevator();
    this.logs = [];
    this.elevator.getLogs().subscribe((log: string) => {
      this.logs.push(log);
    });
  }

  public requestFloor(floor: string) {
    this.elevator.requestFloor(Number(floor));
  }

  public startElevator() {
    this.elevator.startElevator();
  }
}
