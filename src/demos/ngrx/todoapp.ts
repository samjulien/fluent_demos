import {Component, Injectable} from 'angular2/core'
import {provideStore, Store} from '@ngrx/store'
import {todos} from './todos';
import {Observable} from 'rxjs/Rx'

@Component({
  selector: 'todo-app',
  template: `
    <h2>Todos</h2>
    <input type="text" #newtodo /><button (click)="addTodo(newtodo)">add</button>
    <ul>
      <li *ngFor="#todo of todos | async">{{todo.text}}<button (click)="deleteTodo(todo)">delete</button></li>
    </ul>
  `,
  providers: [provideStore({todos})]
})
export class TodoApp {
  todos: Observable<any[]>;
  constructor(private store:Store<any>){
    this.todos = store.select('todos');
  }
  addTodo(el){
    let text = el.value;
    this.store.dispatch({type: 'ADD_TODO', payload: {text}});
    el.value = ""
  }
  deleteTodo(todo){
    this.store.dispatch({type: 'DELETE_TODO', payload: todo});
  }
}
