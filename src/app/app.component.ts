import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'app works!';
  items = [
    {id: 1, text: "todo 1"},
    {id: 2, text: "todo 2"},
    {id: 3, text: "todo 3"}
  ];

  addTodoItem($event) {
    console.log("will add todo item", $event);
  }
}
