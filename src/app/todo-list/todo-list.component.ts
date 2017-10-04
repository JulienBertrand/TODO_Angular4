import {Component, OnInit} from '@angular/core';
import Todo from "../Model/ToDo";
import _ from 'lodash';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {
  todoList: Array<Todo> = [];
  todo: Todo;
  constructor() {
  }
  addTodo(event) {
    try {
      this.todoList.unshift(event)
    }
    catch (e) {
      console.log(e.message);
    }
  }
  delete() {
    this.todoList = [];
  }
  deleteDone() {
    this.todoList = this.todoList.filter((todo) => {
      return !todo.isDone
    });
  }
  ngOnInit() {
  }
}
