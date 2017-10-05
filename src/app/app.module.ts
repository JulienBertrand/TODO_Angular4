import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {TodoListComponent} from './todo-list/todo-list.component';
import {TodoItemComponent} from './todo-item/todo-item.component';
import {FormComponent} from './form/form.component';
import {FormsModule} from "@angular/forms";
import {TodoApi} from "./Service/TodoApi";

@NgModule({
  declarations: [
    AppComponent,
    TodoListComponent,
    TodoItemComponent,
    FormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [
    TodoApi
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
