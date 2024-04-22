import { FunctionsEnum } from '../enums/functions.enum';
import { UserInterface } from '../models/user.model';

export const UsersMock: UserInterface[] = [
  {
    name: 'Alice',
    email: 'alice@example.com',
    function: FunctionsEnum.FE,
    password: 'password123',
  },
  {
    name: 'Bob',
    email: 'bob@example.com',
    function: FunctionsEnum.BE,
    password: 'password456',
  },
  {
    name: 'Charlie',
    email: 'charlie@example.com',
    function: FunctionsEnum.AD,
    password: 'password789',
  },
  {
    name: 'David',
    email: 'david@example.com',
    function: FunctionsEnum.LT,
    password: 'password321',
  },
  {
    name: 'Eva',
    email: 'eva@example.com',
    function: FunctionsEnum.AD,
    password: 'password654',
  },
  {
    name: 'Frank',
    email: 'frank@example.com',
    function: FunctionsEnum.FE,
    password: 'password987',
  },
  {
    name: 'Grace',
    email: 'grace@example.com',
    function: FunctionsEnum.BE,
    password: 'password123',
  },
  {
    name: 'Harry',
    email: 'harry@example.com',
    function: FunctionsEnum.AD,
    password: 'password456',
  },
  {
    name: 'Ivy',
    email: 'ivy@example.com',
    function: FunctionsEnum.LT,
    password: 'password789',
  },
  {
    name: 'Jack',
    email: 'jack@example.com',
    function: FunctionsEnum.FE,
    password: 'password321',
  },
  {
    name: 'Kevin',
    email: 'kevin@example.com',
    function: FunctionsEnum.FE,
    password: 'password654',
  },
  {
    name: 'Lily',
    email: 'lily@example.com',
    function: FunctionsEnum.BE,
    password: 'password987',
  },
  {
    name: 'Mike',
    email: 'mike@example.com',
    function: FunctionsEnum.AD,
    password: 'password123',
  },
  {
    name: 'Nancy',
    email: 'nancy@example.com',
    function: FunctionsEnum.LT,
    password: 'password456',
  },
  {
    name: 'Olivia',
    email: 'olivia@example.com',
    function: FunctionsEnum.BE,
    password: 'password789',
  },
];
