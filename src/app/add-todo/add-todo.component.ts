import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.css']
})
export class AddTodoComponent implements OnInit {
  @Input()
  todoText = "test";

  constructor() { }

  ngOnInit() {
  }

  addItemClick($event : MouseEvent){
    console.log(this.todoText);
  }
}
