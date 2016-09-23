import { Component } from '@angular/core';

export class TodoItem {
  id: number;
  text: string;
  done: boolean
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'app works!';
  items : Array<TodoItem> = [
    {id: 1, text: "todo 1", done: true},
    {id: 2, text: "todo 2", done: false},
    {id: 3, text: "todo 3", done: true}
  ];

  addTodoItem(todoText) {
    this.items.push({ id: this.items.length + 1, text: todoText, done: false})
  }
}
