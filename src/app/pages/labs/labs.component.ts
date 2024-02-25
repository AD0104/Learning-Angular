import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-labs',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './labs.component.html',
  styleUrl: './labs.component.css'
})
export class LabsComponent {
  example_text = 'example text';
  tasks = ['Task 1', 'Task 2', 'Task 3'];
  tasks_signal = signal(['Task 1', 'Task 2', 'Task 3']);
  input_value = "Input Value";
  button_disabled = false;
  button_text = "Button Text";
  image_url = "https://w3schools.com/howto/img_avatar.png";
  change_event_placeholder = "Enter a number";
  keydown_event_placeholder = "Enter new text";
  //Modificado para ser una Signal
  counter = signal(0);
  profile = {
    name: "Adrian",
    age: 22,
    image_url: "https://w3schools.com/howto/img_avatar.png"
  }

  click_handler() {
    alert("button clicked");
  }

  change_handler(event: Event) {
    console.log("Event triggered")
    console.log(event);
    //Cambiando el valor de una Signal
    this.counter.set(this.counter() + 1);
  }

  keydown_handler(event: KeyboardEvent) {
    const input_origin = event.target as HTMLInputElement;
    console.log("Input Value: " + input_origin.value);
  }
}
