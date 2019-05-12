import { Component, OnInit, Input, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-list-item',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.css']
})
export class ListItemComponent implements OnInit {

  @Input() todo: { title: string, completed: boolean };
  @Output() toggle: EventEmitter<any> = new EventEmitter();
  @Output() remove: EventEmitter<any> = new EventEmitter();

  constructor() {
    console.log(this.todo, 'constr');
  }

  ngOnInit() {
    console.log(this.todo, 'init');
  }

  addHandler() {

  }

  toggleCopletedHandler() {
    this.toggle.emit();
  }

  deleteHandler() {
    this.remove.emit();
  }

}
