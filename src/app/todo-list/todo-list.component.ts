import {Component, OnInit} from '@angular/core';
import Todo from "../Model/ToDo";
import _ from 'lodash';
import {default as TodoService} from "../Service/TodoService";


@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css'],
  providers:[
    TodoService
  ]
})
export class TodoListComponent implements OnInit {
  get todoService(): TodoService {
    return this._todoService;
  }
  todoList: Array<Todo> = [];
  todo: Todo;
  constructor(private _todoService:TodoService) {
  }

  addTodo(event){
    return this.todoService.addTodoService(event).then((newList)=>{
      this.todoList = newList;
    });
  }

  deleteList() {
    return this.todoService.deleteTodoService().then((newList)=>{
      this.todoList = newList;
    });
  }


  deleteDone() {
    return this.todoService.deleteTodoDoneService().then((newList)=>{
      this.todoList = newList;
    });
  }

  ngOnInit() {
    this._todoService.getTodo().then((todos)=>(this.todoList= todos));

  }
}
