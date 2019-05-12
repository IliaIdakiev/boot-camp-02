import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ListItemComponent } from './list-item/list-item.component';
import { CommonModule } from '@angular/common';
import { TodoListComponent } from './todo-list/todo-list.component';
import { AppRoutingModule } from './app-routing.module';
import { TodoEntityComponent } from './todo-entity/todo-entity.component';
// import { TodoService } from './todo.service';

@NgModule({
  declarations: [
    AppComponent,
    ListItemComponent,
    TodoListComponent,
    TodoEntityComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
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
