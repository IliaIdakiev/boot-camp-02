import { Component } from '@angular/core';
import { TodoService } from '../todo.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent {
  todos: any[];

  constructor(public todoService: TodoService) {

  }

  // tslint:disable-next-line:use-life-cycle-interface
  ngDoCheck() {
    this.todos = this.todoService.todos;
  }

  toggleCopletedHandler(idx: number) {
    this.todoService.toggle(idx);
  }

  removeHandler(idx: number) {
    this.todoService.remove(idx);
  }

}


