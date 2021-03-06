import { Injectable } from '@angular/core';
import { TodoItem } from './todo-item';

@Injectable()
export class TodoService {

  items: Array<TodoItem> = [
    { id: 1, text: 'todo 1', done: true },
    { id: 2, text: 'todo 2', done: false },
    { id: 3, text: 'todo 3', done: true }
  ];

  constructor() { }

  addTodoItem(todoText) {
    this.items.push({ id: this.items.length + 1, text: todoText, done: false });
  }

  changeStatus(todoItem: TodoItem) {
    todoItem.done = !todoItem.done;
  }

  getItem(id: number) {
    let item: TodoItem;
    this.items.forEach(element => {
      if (element.id === id) {
        item = element;
      }
    });
    return item;
  }
}
