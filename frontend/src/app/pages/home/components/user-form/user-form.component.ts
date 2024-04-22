import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { FunctionsEnum } from 'src/app/enums/functions.enum';
import { UserInterface } from 'src/app/models/user.model';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css'],
})
export class UserFormComponent implements OnInit {
  @Input()
  public user: UserInterface = {
    name: '',
    email: '',
    function: FunctionsEnum.DF,
    password: '',
  };
  /*
    TODO:
    Implementar @Output() retornando o formulário/dados do usuário
    para o componente do qual foi chamado
  */

  functions: typeof FunctionsEnum = FunctionsEnum;
  isEditing: boolean = false;

  public newUser!: FormGroup;

  constructor(private router: Router) {}

  ngOnInit(): void {
    const hasUser: boolean = !!this.user;
    this.isEditing = hasUser;

    this.newUser = new FormGroup({
      name: new FormControl(this.user.name, Validators.required),
      email: new FormControl(this.user.email, [
        Validators.required,
        Validators.email,
      ]),
      function: new FormControl(this.user.function, Validators.required),
      password: new FormControl(this.user.password, [
        Validators.required,
        Validators.minLength(6),
        Validators.maxLength(15),
      ]),
    });
  }

  public onSubmit(): void {
    console.log(this.newUser.value);
    this.router.navigateByUrl('/app/users');
  }
}
