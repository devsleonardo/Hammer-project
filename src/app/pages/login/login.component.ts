import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

//Service
import { ApiService } from './../../services/api.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  public form = new FormGroup({
    email: new FormControl(null, [Validators.required, Validators.email]),
    password: new FormControl(null, [Validators.required, Validators.minLength(8)]),
  });

  constructor(
    private apiService: ApiService,
    private toastr: ToastrService,
    private router: Router
  ) {}

  ngOnInit(): void {}

  public submitLogin(): void {
    this.apiService.login(this.form.value.email, this.form.value.password).subscribe(
      () => {
        this.router.navigate(['tabela']);
      },
      (error) => {
        console.log(error);
        this.toastr.error(error.error.message);
      }
    );
  }
}
