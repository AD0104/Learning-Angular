import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  tasks= signal([
    'Read 10 pages from "Meditations" by Marcus Aurelius', 
    'Study something related to programming', 
    'Exercise for at least 30 minutes']);

  add_new_task (event: Event) {
    /*
      MI SOLUCION:
      const input = event.target as HTMLInputElement;
      let new_tasks = this.tasks();
      new_tasks.push(input.value);
      this.tasks.set(new_tasks);
      input.value = "";
    */
    const input = event.target as HTMLInputElement;
    const newTask = input.value;
    input.value = "";
    // ...tasks -> Desempaqueta el array
    this.tasks.update( (tasks) => [...tasks, newTask]);
  }

  delete_task(index:number) {
    this.tasks.update(
      (tasks) => 
        tasks.filter(
          (task, position) => position !== index
        )
    );
  }
}
