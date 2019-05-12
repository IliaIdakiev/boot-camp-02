import { Component } from '@angular/core';
import { TodoService } from './todo.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  todos: any[];

  constructor(public todoService: TodoService) {
    this.todos = todoService.todos;
  }

  toggleCopletedHandler(idx: number) {
    this.todoService.toggle(idx);
  }

  removeHandler(idx: number) {
    this.todoService.remove(idx);
  }
}
