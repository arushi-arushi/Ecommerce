import { Component, input, output } from '@angular/core';
import { Todo } from '../services/model/todo.type';
import { HighlightCompletedTodoDirective } from '../directives/highlight-completed-todo.directive';
import { UpperCasePipe } from '@angular/common';

@Component({
  selector: 'app-todo-item',
  imports: [HighlightCompletedTodoDirective,UpperCasePipe],
  templateUrl: './todo-item.component.html',
  styleUrl: './todo-item.component.css'
})
export class TodoItemComponent {
todo= input.required<Todo>();
todoToggled=output<Todo>();

TodoClicked(){
  this.todoToggled.emit(this.todo());
}
}
