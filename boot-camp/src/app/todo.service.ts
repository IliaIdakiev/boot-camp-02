import { Injectable } from '@angular/core';
import { AppModule } from './app.module';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  todos = [
    {
      title: 'Do something',
      completed: true
    }
  ];

  constructor() { }

  toggle(idx: number) {
    this.todos[idx].completed = !this.todos[idx].completed;
  }

  remove(idx: number) {
    this.todos = this.todos.filter((el, index) => index !== idx);
  }
}
