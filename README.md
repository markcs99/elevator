# Elevator Algorithm

This project is an implementation of an advanced elevator algorithm in TypeScript, which can be used in Angular applications. The algorithm is designed to handle multiple requests and can automate the movement of the elevator, and also log the elevator movement and when it stopped.

## Technologies
- TypeScript
- Angular (for the integration example)
- RxJs (for implementing observer pattern)

## Elevator Algorithm

The algorithm is implemented using a class called `Elevator`, which has several properties and methods to simulate the behavior of an elevator.
- The `currentFloor` property keeps track of the current floor of the elevator.
- The `destinationFloor` property keeps track of the next floor that the elevator is moving to.
- The `floorQueue` property is an array that keeps track of the requested floors in the order they were requested.
- The `logs` property is a Subject that is used to send logs as a stream of data.

The `requestFloor(floor: number)` method is used to request a specific floor. The method checks if the floor is already in the queue and if it's not it will add it to the queue. Then it calls the `chooseDestinationFloor()` method to determine the next destination floor.

reachFloor()` method is used to simulate the elevator reaching a floor. It sets the current floor to the destination floor and removes the destination floor from the queue. It also calls the `chooseDestinationFloor()` method again to determine the next destination floor.

The `chooseDestinationFloor()` method is used to determine the next destination floor. It checks if there are any floors in the queue, if there are it will select the closest floor to the current floor as the next destination floor. If there are no floors in the queue, it sets the destination floor to the current floor.

The `startElevator()` method is used to start the elevator's movement. It starts a loop that continues until the floorQueue is empty. Within the loop, it uses the `next()` method of the `logs` Subject to send log messages indicating that the elevator is moving and stopped. It also calls the `reachFloor()` method to simulate the elevator reaching a floor and updating the current floor and destination floor accordingly.

The `getLogs()` method is used to provide an observable of the logs, it will return the logs observable.

## Compilation and Debugging

To use this algorithm in your Angular project, you can follow these steps:

1. Copy the `Elevator` class into your project and import it in your component where you want to use it.
2. In your component's constructor, create an instance of the `Elevator` class and subscribe to the logs observable using the `getLogs()` method.
3. Use the `requestFloor(floor: number)` method to request a specific floor and the `startElevator()` method to start the elevator's movement.
4. Use the logs array to display the logs in your HTML template

For debugging, you can use the browser's developer tools to check the values of the properties and the logs array. You can also add additional console logs in the class or the component to check the values of the properties and the behavior of the algorithm.
