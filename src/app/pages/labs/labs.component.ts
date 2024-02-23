import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

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
  profile = {
    name: "Adrian",
    age: 22,
    image_url: "https://w3schools.com/howto/img_avatar.png"
  }
}
