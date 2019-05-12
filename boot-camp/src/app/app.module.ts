import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ListItemComponent } from './list-item/list-item.component';
import { CommonModule } from '@angular/common';
// import { TodoService } from './todo.service';

@NgModule({
  declarations: [
    AppComponent,
    ListItemComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    // TodoService,
    // {
    //   provide: TodoService,
    //   useClass: TodoService
    //   // useValue: 'test'
    // }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
