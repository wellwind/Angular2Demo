import { TodoItem } from './../todo-item';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { TodoService } from '../todo.service';

@Component({
  selector: 'app-item-detail',
  templateUrl: './item-detail.component.html',
  styleUrls: ['./item-detail.component.css']
})
export class ItemDetailComponent implements OnInit {

  todoItem: TodoItem;

  constructor(private route: ActivatedRoute, private router: Router, private todoService: TodoService) {
  }

  ngOnInit() {
    let id = +this.route.snapshot.params['id']; // convert to integer
    this.todoItem = this.todoService.getItem(id);
  }

}
