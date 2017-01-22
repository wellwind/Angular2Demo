import { TodoService } from './../todo.service';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.css']
})
export class AddTodoComponent implements OnInit {
  @Input()
  todoText = 'test';

  constructor(private todoService: TodoService) { }

  ngOnInit() {
  }

  addItemClick($event: MouseEvent) {
    this.todoService.addTodoItem(this.todoText);
  }
}
