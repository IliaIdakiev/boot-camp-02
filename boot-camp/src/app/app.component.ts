import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  todos = [
    {
      title: 'Do something',
      completed: true
    }
  ];

  constructor() { }

  toggleCopletedHandler(idx: number) {
    this.todos[idx].completed = !this.todos[idx].completed;
  }

  removeHandler(idx: number) {
    this.todos = this.todos.filter((el, index) => index !== idx);
  }
}
