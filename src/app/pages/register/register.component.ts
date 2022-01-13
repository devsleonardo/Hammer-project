import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

//Service

import { RegisterService } from '../../resources/services/register.service';

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
    private registerService: RegisterService,
    private router: Router,
    private toastr: ToastrService
  ) {}

  ngOnInit(): void {}

  public submitRegister(): void {
    if (this.form.value.senha !== this.form.value.reSenha) {
      this.toastr.error('As senhas são diferentes');
      return;
    }
    this.registerService.register(this.form.value).subscribe(
      () => {
        this.toastr.success('Cadastro realizado com sucesso');
        this.router.navigate(['']);
      },
      (error) => {
        this.toastr.error(error.error.message);
      }
    );
  }
}
