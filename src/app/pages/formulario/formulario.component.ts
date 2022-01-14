import { Component, OnInit } from '@angular/core';

import { ToastrService } from 'ngx-toastr';
import { ApiService } from 'src/app/resources/services/api.service';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.scss'],
})
export class FormularioComponent implements OnInit {
  constructor(private apiService: ApiService, private toastr: ToastrService) {}

  ngOnInit(): void {}

  infoFormulario() {
    this.apiService.getFormulario().subscribe((res) => {
      console.log(res);
    });
  }

  saveFormulario() {}
}
