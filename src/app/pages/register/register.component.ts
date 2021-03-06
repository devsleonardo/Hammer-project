import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

//Service

import { AuthService } from '../../resources/services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
  public form = new FormGroup({
    email: new FormControl(null, [Validators.required, Validators.email]),
    senha: new FormControl(null, [Validators.required, Validators.minLength(8)]),
    nome: new FormControl(null, [Validators.required, Validators.minLength(10)]),
    endereco: new FormControl(null),
    telefone: new FormControl(null),
    reSenha: new FormControl(null, [Validators.required]),
  });
  constructor(
    private authService: AuthService,
    private router: Router,
    private toastr: ToastrService
  ) {}

  ngOnInit(): void {}

  public submitRegister(): void {
    if (this.form.value.senha !== this.form.value.reSenha) {
      this.toastr.error('As senhas são diferentes');
      return;
    }
    this.authService.register(this.form.value).subscribe(
      () => {
        this.toastr.success('Cadastro realizado com sucesso');
      },
      (error) => {
        this.toastr.error(error.error.message);
      },
      () => {
        //Fazer o usuario logar automaticamente após 1seg
        setTimeout(() => {
          this.authService.login(this.form.value).subscribe(() => {
            this.router.navigate(['tabela']);
          });
        }, 1000);
      }
    );
  }
}
