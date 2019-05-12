import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'boot-camp';

  constructor() { }

  changeTitleHandler(titleInput: HTMLInputElement) {
    this.title = titleInput.value;
    titleInput.value = '';
  }
}
