import { Component, OnInit } from '@angular/core';
import {ElevatorService} from "../../services/elevator.service";

@Component({
  selector: 'app-elevator',
  templateUrl: './elevator.component.html',
  styleUrls: ['./elevator.component.css']
})
export class ElevatorComponent implements OnInit {

  currentFloor = 0;
  direction = 'up';
  occupied = false;
  floor = 0;
  constructor(private elevatorService: ElevatorService) { }

  ngOnInit(): void {
    this.currentFloor = this.elevatorService.currentFloor;
    this.direction = this.elevatorService.direction;
    this.occupied = this.elevatorService.occupied;
  }

  requestFloor(floor: number, direction: string) {
    this.elevatorService.requestFloor(floor, direction);
    this.currentFloor = this.elevatorService.currentFloor;
    this.direction = this.elevatorService.direction;
    this.occupied = this.elevatorService.occupied;
  }

  start() {
    while (this.elevatorService.destinationFloors.length > 0 || this.elevatorService.requests[0].length > 0 || this.elevatorService.requests[1].length > 0) {
      this.elevatorService.move();
      this.currentFloor = this.elevatorService.currentFloor;
      this.direction = this.elevatorService.direction;
      this.occupied = this.elevatorService.occupied;
    }
  }

}

