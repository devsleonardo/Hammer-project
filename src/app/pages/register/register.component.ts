import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
  public form = new FormGroup({
    email: new FormControl(null, [Validators.required, Validators.email]),
    name: new FormControl(null, [Validators.required, Validators.minLength(10)]),
    address: new FormControl(null),
    phone: new FormControl(null),
    password: new FormControl(null, [Validators.required, Validators.minLength(8)]),
    rePassword: new FormControl(null, [Validators.required]),
  });
  constructor(
    private apiService: ApiService,
    private toastr: ToastrService,
    private router: Router
  ) {}

  ngOnInit(): void {}

  public submitRegister(): void {
    if (this.form.value.password !== this.form.value.rePassword) {
      this.toastr.error('As senhas são diferentes');
      return;
    }
    this.apiService
      .register(this.form.value.email, this.form.value.name, this.form.value.password)
      .subscribe(
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
