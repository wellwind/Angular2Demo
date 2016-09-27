import { TodoItem } from './../todo-item';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { TodoService } from '../todo.service';

@Component({
  templateUrl: './item-detail.component.html',
  styleUrls: ['./item-detail.component.css']
})
export class ItemDetailComponent implements OnInit {

  todoItem: TodoItem;

  constructor(private route: ActivatedRoute, private router: Router, private todoService: TodoService) {
  }

  ngOnInit() {
    this.route.params.forEach((params: Params) => {
      let id = +params['id']; // convert to integer
      this.todoItem = this.todoService.getItem(id);
    });
  }

}
