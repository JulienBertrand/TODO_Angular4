import Todo from '../Model/ToDo'


export default class TodoApi {
  todoList: Array<Todo> = [];

  promTodo(): Promise<Array<Todo>> {

    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(this.todoList);
      }, 2000);
    });
  }

  promTodoAdd(event: Todo): Promise<any> {
    return new Promise(((resolve, reject) => {
        this.todoList.unshift(event);
        resolve('Ajout d\'une todo réussi');
        reject((e) => (e.message))
      })
    )}

  promTodoDelete(): Promise<Array<Todo>> {
    return new Promise(((resolve, reject) => {
      this.todoList = [];
      resolve(this.todoList);
      reject((e) => (e.message))
    })
    )}

    promTodoDeleteDone(): Promise<Array<Todo>>{
      return new Promise(((resolve, reject) => {
        this.todoList = this.todoList.filter((todo) => {
          return !todo.isDone
        });;
          resolve(this.todoList);
          reject((e) => (e.message))
        })
      )
    }


}

