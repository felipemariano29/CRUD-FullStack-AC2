import { Component } from '@angular/core';
import { TaskMock } from 'src/app/mocks/tasks.mock';
import { TaskInterface } from 'src/app/models/task.model';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css'],
})
export class TodoListComponent {
  taskList: TaskInterface[] = TaskMock;

  changeTask(task: TaskInterface) {
    task.done = !task.done;
  }
}
