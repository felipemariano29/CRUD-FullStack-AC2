import { FunctionsEnum } from '../enums/functions.enum';

export interface UserInterface {
  name: string;
  email: string;
  function: FunctionsEnum;
  password: string;
}
