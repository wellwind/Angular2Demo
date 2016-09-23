import { Component, OnInit, Input } from '@angular/core';
import { TodoItem } from '../app.component';

@Component({
  selector: 'app-todo-items',
  templateUrl: './todo-items.component.html',
  styleUrls: ['./todo-items.component.css']
})
export class TodoItemsComponent implements OnInit {

  @Input()
  items;

  constructor() { }

  ngOnInit() {
  }

  changeStatus(todoItem: TodoItem){
    todoItem.done = !todoItem.done;
  }
}
