import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ElevatorService {
  currentFloor: number;
  destinationFloors: number[];
  direction: string;
  requests: number[][];
  occupied: boolean;

  constructor() {
    this.currentFloor = 1;
    this.destinationFloors = [1];
    this.direction = "up";
    this.requests = [[], []];
    this.occupied = false;
  }

  requestFloor(floor: number, direction: string): void {
    if (this.occupied) {
      this.requests[direction === "up" ? 0 : 1].push(floor);
    } else {
      this.occupied = true;
      if (this.currentFloor !== floor) {
        this.destinationFloors = [floor];
        this.direction = this.currentFloor < floor ? "up" : "down";
      }
    }
  }

  move(): void {
    if (this.destinationFloors.length === 0) {
      this.occupied = false;
      this.handleRequests();
      return;
    }

    const nextFloor = this.destinationFloors.shift();
    this.currentFloor = Number(nextFloor);

    console.log(this.currentFloor);
  }

  handleRequests(): void {
    if (this.requests[0].length === 0 && this.requests[1].length === 0) {
      return;
    }

    let nextDirection = "";
    if (this.direction === "up") {
      if (this.requests[1].length > 0) {
        nextDirection = "down";
      } else {
        nextDirection = "up";
      }
    } else {
      if (this.requests[0].length > 0) {
        nextDirection = "up";
      } else {
        nextDirection = "down";
      }
    }

    this.direction = nextDirection;
    this.destinationFloors = this.requests[nextDirection === "up" ? 0 : 1].sort((a, b) => a - b);
    this.requests[nextDirection === "up" ? 0 : 1] = [];
  }
}
