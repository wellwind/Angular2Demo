import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { TodoService } from '../todo.service';
import { TodoItem } from './../todo-item';

@Component({
  selector: 'app-todo-items',
  templateUrl: './todo-items.component.html',
  styleUrls: ['./todo-items.component.css'],
  providers: [TodoService]
})
export class TodoItemsComponent implements OnInit {

  @Input()
  items: Array<TodoItem>;

  constructor(private router: Router, private todoService: TodoService) { }

  ngOnInit() {
  }

  viewDetail(item: TodoItem) {
    this.router.navigate(['/item', item.id]);
  }
}
