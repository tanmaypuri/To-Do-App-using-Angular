import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-todo-create',
  templateUrl: './todo-create.component.html',
  styleUrls: ['./todo-create.component.css']
})
export class TodoCreateComponent implements OnInit {

  @Output() todoCreated = new EventEmitter();
  enteredItem = "";
  newItem = "No items"

  onAddItem(){
    const todo = {item: this.enteredItem};
    console.log(todo);
    this.todoCreated.emit(todo);
  }


  constructor() { }

  ngOnInit() {
  }

}
