import { Component, signal } from '@angular/core';
import { GreetingComponent } from "../greeting/greeting.component";
import { CounterComponent } from "../counter/counter.component";

@Component({
  selector: 'app-home',
  imports: [GreetingComponent, CounterComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
message=signal('Hello World!');
}
