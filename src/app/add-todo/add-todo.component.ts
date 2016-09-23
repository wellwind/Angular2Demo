import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.css']
})
export class AddTodoComponent implements OnInit {
  @Input()
  todoText = "test";

  @Output()
  addTodoItem = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  addItemClick($event : MouseEvent){
    console.log(this.todoText);
    this.addTodoItem.emit(this.todoText);
  }
}
