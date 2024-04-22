import { Component } from '@angular/core';
import { UserInterface } from 'src/app/models/user.model';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css'],
})
export class EditUserComponent {
  public user: UserInterface;

  constructor() {
    const userString: string = localStorage.getItem('user')!;
    this.user = JSON.parse(userString);
  }
}
