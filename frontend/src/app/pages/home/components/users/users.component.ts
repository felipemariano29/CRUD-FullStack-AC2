import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UsersMock } from 'src/app/mocks/users.mock';
import { UserInterface } from 'src/app/models/user.model';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],
})
export class UsersComponent {
  public users: UserInterface[] = UsersMock;

  constructor(private router: Router) {}

  public newUser(): void {
    this.router.navigateByUrl('/app/add-user');
  }

  public editUser(user: UserInterface): void {
    localStorage.setItem('user', JSON.stringify(user));
    this.router.navigateByUrl('/app/edit-user');
  }

  public deleteUser(user: UserInterface): void {
    const index: number = this.users.indexOf(user);
    this.users.splice(index, 1);
  }
}
