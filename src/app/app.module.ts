import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { AddTodoComponent } from './add-todo/add-todo.component';
import { TodoItemsComponent } from './todo-items/todo-items.component';

import { AppRoutingModule } from './app.routing.module';

import { TodoService } from './todo.service';

import { IndexComponent } from './index/index.component';
import { SettingsComponent } from './settings/settings.component';
import { ItemDetailComponent } from './item-detail/item-detail.component';
import { BsButtonDirective } from './bs-button.directive';

@NgModule({
  declarations: [
    AppComponent,
    AddTodoComponent,
    TodoItemsComponent, IndexComponent, SettingsComponent, ItemDetailComponent, BsButtonDirective, BsButtonDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [TodoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
