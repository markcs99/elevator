import { Injectable, EventEmitter } from '@angular/core';
import {Subject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class Elevator {
  public currentFloor: number;
  public destinationFloor: number;
  public floorQueue: number[];
  private logs: Subject<string> = new Subject<string>();

  constructor() {
    this.currentFloor = 1;
    this.destinationFloor = 1;
    this.floorQueue = [];
  }

  public requestFloor(floor: number) {
    if (!this.floorQueue.includes(floor)) {
      this.floorQueue.push(floor);
    }
    this.chooseDestinationFloor();
  }

  public reachFloor() {
    this.currentFloor = this.destinationFloor;
    this.floorQueue.splice(this.floorQueue.indexOf(this.destinationFloor),1);
    this.chooseDestinationFloor();
  }

  private chooseDestinationFloor() {
    if (this.floorQueue.length === 0) {
      this.destinationFloor = this.currentFloor;
    } else {
      let closestFloor = this.floorQueue[0];
      for (const floor of this.floorQueue) {
        if (Math.abs(floor - this.currentFloor) < Math.abs(closestFloor - this.currentFloor)) {
          closestFloor = floor;
        }
      }
      this.destinationFloor = closestFloor;
    }
  }

  public startElevator() {
    while (this.floorQueue.length > 0) {
      this.logs.next(`Elevator moving from floor ${this.currentFloor} to floor ${this.destinationFloor}`);
      this.reachFloor();
      this.logs.next(`Elevator stopped at floor ${this.currentFloor}`);
    }
  }

  public getLogs() {
    return this.logs.asObservable();
  }
}
