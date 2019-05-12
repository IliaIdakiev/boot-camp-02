import { Component, OnInit, ViewChild, ElementRef, Renderer2 } from '@angular/core';
import { TodoService } from '../todo.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-todo-entity',
  templateUrl: './todo-entity.component.html',
  styleUrls: ['./todo-entity.component.css']
})
export class TodoEntityComponent implements OnInit {

  @ViewChild('titleInput') titleInput: ElementRef;

  constructor(public todoService: TodoService, public rederer: Renderer2, public router: Router) { }

  ngOnInit() {
  }

  addHandler() {
    this.todoService.add({
      title: this.titleInput.nativeElement.value,
      completed: false
    });

    this.rederer.setProperty(this.titleInput.nativeElement, 'value', '');
    this.router.navigate(['/todos']);
  }

}
