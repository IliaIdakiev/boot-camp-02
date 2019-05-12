import { Component, DoCheck, ViewChild, ElementRef, AfterViewInit, Renderer2 } from '@angular/core';
import { TodoService } from './todo.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements DoCheck {
  @ViewChild('titleInput') titleInput: ElementRef;

  todos: any[];

  constructor(public todoService: TodoService, private rederer: Renderer2) {
    // this.todos = todoService.todos;
    console.log(this.titleInput);
  }

  ngDoCheck() {
    this.todos = this.todoService.todos;
  }

  // ngAfterViewInit() {
  //   console.log(this.titleInput);
  // }

  addHandler() {
    this.todoService.add({
      title: this.titleInput.nativeElement.value,
      completed: false
    });

    this.rederer.setProperty(this.titleInput.nativeElement, 'value', '');
  }

  toggleCopletedHandler(idx: number) {
    this.todoService.toggle(idx);
  }

  removeHandler(idx: number) {
    this.todoService.remove(idx);
  }
}
