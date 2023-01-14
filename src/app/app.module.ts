import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ElevatorComponent } from './components/elevator/elevator.component';
import {FormsModule} from "@angular/forms";
import { DiskSchedulerComponent } from './components/disk-scheduler/disk-scheduler.component';
import { ElevatedComponent } from './components/elevated/elevated.component';

@NgModule({
  declarations: [
    AppComponent,
    ElevatorComponent,
    DiskSchedulerComponent,
    ElevatedComponent
  ],
    imports: [
        BrowserModule,
        FormsModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
