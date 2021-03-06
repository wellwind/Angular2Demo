/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, inject, TestBed, ComponentFixtureAutoDetect } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { AddTodoComponent } from './add-todo.component';
import { TodoService } from '../todo.service';

describe('AddTodoComponent', () => {
  let component: AddTodoComponent;
  let fixture: ComponentFixture<AddTodoComponent>;
  let de: DebugElement;
  let el: HTMLElement;
  // let todoService: TodoService;

  // mock todo service
  let todoServiceMock = {
    addTodoItem(todoText) { }
  };

  beforeEach(async(() => {

    TestBed.configureTestingModule({
      declarations: [AddTodoComponent],
      imports: [
        CommonModule,
        FormsModule
      ],
      providers: [
        { provide: TodoService, useValue: todoServiceMock }
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddTodoComponent);
    component = fixture.componentInstance;

    // todoService from the root injector
    // todoService = TestBed.get(TodoService);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('addItemClick function should call TodoService.addTodoItem', inject([TodoService], (todoService: TodoService) => {
    spyOn(todoService, 'addTodoItem');

    component.todoText = 'test todo test...';
    component.addItemClick(null);

    expect(todoService.addTodoItem).toHaveBeenCalledWith(component.todoText);
  }));
});
