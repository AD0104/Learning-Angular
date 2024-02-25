import { CommonModule } from '@angular/common';
import { Component, input } from '@angular/core';

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
  input_value = "Input Value";
  button_disabled = false;
  button_text = "Button Text";
  image_url = "https://w3schools.com/howto/img_avatar.png";
  change_event_placeholder = "Enter a number";
  keydown_event_placeholder = "Enter new text";
  counter = 0;
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
    this.counter++;
  }

  keydown_handler(event: KeyboardEvent) {
    const input_origin = event.target as HTMLInputElement;
    console.log("Input Value: " + input_origin.value);
  }
}
