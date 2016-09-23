import { Component, OnInit, Input } from '@angular/core';
import { TodoItem } from '../app.component';
import { TodoService } from '../todo.service';

@Component({
  selector: 'app-todo-items',
  templateUrl: './todo-items.component.html',
  styleUrls: ['./todo-items.component.css'],
  providers: [TodoService]
})
export class TodoItemsComponent implements OnInit {

  @Input()
  items;

  constructor(private todoService: TodoService) { }

  ngOnInit() {
  }
}
