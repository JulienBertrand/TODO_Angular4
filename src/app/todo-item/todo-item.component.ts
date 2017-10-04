import {Component, OnInit, Input} from '@angular/core';
import Todo from "../Model/ToDo";

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {
  @Input()
  todo: Todo;


/*  handleClick() {
    console.log('TODO', this.todo);
}*/


  constructor() {
  }

  ngOnInit() {
  }
  handleClick() {
    console.log('TODO', this.todo);
  }
}
