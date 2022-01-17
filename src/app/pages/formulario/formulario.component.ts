import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

//Service
import { ApiService } from 'src/app/resources/services/api.service';

//Model
import { ModelFormularioPost } from '../../resources/model/modelFormularioPost';
import { ModelFormularioGet } from '../../resources/model/modelFormularioGet';
@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.scss'],
})
export class FormularioComponent implements OnInit {
  form: any = new FormArray([]);
  allItens: ModelFormularioGet[];

  constructor(private apiService: ApiService, private toastr: ToastrService) {}

  ngOnInit(): void {}

  infoFormulario(): void {
    this.apiService.getFormulario().subscribe((res: ModelFormularioGet[]) => {
      res.forEach((i) => {
        this.allItens = res;
        this.form.push(new FormControl(i.valor, [Validators.required]));
        // https://angular.io/api/forms/FormControl#_forEachChild
      });
    });
  }

  saveFormulario(): void {
    const data = this.form.value.map((data: ModelFormularioPost, value: any) => {
      console.log(data);
      return {
        valor: data,
        tipo: this.allItens[value].tipo,
        id: this.allItens[value].id,
      };
    });

    this.apiService.postFormulario(data).subscribe(
      () => {
        this.toastr.success('Formulário salvo com sucesso');
        setTimeout(function () {
          location.reload();
        }, 1000);
      },
      (error) => {
        this.toastr.error(error.error.message);
      }
    );
  }
}
