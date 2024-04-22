import { Component } from '@angular/core';
import { FunctionsEnum } from 'src/app/enums/functions.enum';
import { UsersMock } from 'src/app/mocks/users.mock';
import { UserInterface } from 'src/app/models/user.model';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css'],
})
export class WelcomeComponent {
  public users: UserInterface[] = UsersMock;
  public usersQuantity: number = this.users.length;

  public UsersFE: UserInterface[] = this.users.filter(
    (u: UserInterface) => u.function === FunctionsEnum.FE
  );
  public UsersBE: UserInterface[] = this.users.filter(
    (u: UserInterface) => u.function === FunctionsEnum.BE
  );
  public UsersAD: UserInterface[] = this.users.filter(
    (u: UserInterface) => u.function === FunctionsEnum.AD
  );
  public UsersLT: UserInterface[] = this.users.filter(
    (u: UserInterface) => u.function === FunctionsEnum.LT
  );

  public usersByFunction: any = [
    { function: FunctionsEnum.FE, quantity: this.UsersFE.length },
    { function: FunctionsEnum.BE, quantity: this.UsersBE.length },
    { function: FunctionsEnum.AD, quantity: this.UsersAD.length },
    { function: FunctionsEnum.LT, quantity: this.UsersLT.length },
  ];
}
