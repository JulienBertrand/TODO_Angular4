import Todo from '../Model/ToDo'


export class TodoApi {
  todoList: Array<Todo> = [];

  promTodo(): Promise<Array<Todo>> {

    return new Promise((resolve) => {
      // setTimeout(() => {
      resolve([...this.todoList]);
      // }, 2000);
    })
  }

  promTodoAdd(event: Todo): Promise<any> {
    return new Promise(((resolve, reject) => {
        this.todoList.unshift(event);
        resolve([...this.todoList]);
      })
    )
  }

  promTodoDelete(): Promise<Array<Todo>> {
    return new Promise(((resolve, reject) => {
        this.todoList = [];
        resolve([...this.todoList]);
      })
    )
  }

  promTodoDeleteDone(): Promise<Array<Todo>> {
    return new Promise(((resolve, reject) => {
        this.todoList = this.todoList.filter((todo) => {
          return !todo.isDone
        });
        resolve([...this.todoList]);
      })
    )
  }
}

