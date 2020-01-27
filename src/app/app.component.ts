import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  storedTodos=[];

  onTodoAdded(todo: any){
    this.storedTodos.push(todo);
}
}