import { TaskInterface } from '../models/task.model';

export const TaskMock: TaskInterface[] = [
  { done: false, description: 'Clean the house' },
  { done: false, description: 'Wash the car' },
  { done: true, description: 'Feed the dog' },
];
