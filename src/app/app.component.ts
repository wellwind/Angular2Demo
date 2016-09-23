import { Component } from '@angular/core';
import { TodoService } from './todo.service';

export class TodoItem {
  id: number;
  text: string;
  done: boolean
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [TodoService]
})

export class AppComponent {
  title = 'app works!';

  constructor(private todoService: TodoService){
  }

}
