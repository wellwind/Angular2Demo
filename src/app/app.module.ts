import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { AddTodoComponent } from './add-todo/add-todo.component';
import { TodoItemsComponent } from './todo-items/todo-items.component';

import { AppRoutingModule } from './app.routing.module';

import { TodoService } from './todo.service';

import { IndexComponent } from './index/index.component';
import { ItemDetailComponent } from './item-detail/item-detail.component';
import { BsButtonDirective } from './bs-button.directive';

@NgModule({
  declarations: [
    AppComponent,
    AddTodoComponent,
    TodoItemsComponent, IndexComponent, ItemDetailComponent, BsButtonDirective
  ],
  imports: [
    BrowserModule,
    RouterModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [TodoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
