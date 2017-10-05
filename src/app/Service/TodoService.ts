import {Injectable} from '@angular/core';
import Todo from '../Model/ToDo';
import {TodoApi} from '../Service/TodoApi';


@Injectable()
export default class TodoService {
  todoList: Array<Todo> = [];
  constructor(private todoApi: TodoApi) {
  }

  getTodo(): Promise<Array<Todo>> {
    return this.todoApi.promTodo();
  }

  addTodoService(event: Todo): Promise<any> {
    return this.todoApi.promTodoAdd(event);

  }

  deleteTodoService(): Promise<Array<Todo>> {
    return this.todoApi.promTodoDelete();
  }
  deleteTodoDoneService(): Promise<Array<Todo>> {
    return this.todoApi. promTodoDeleteDone();
  }
}
