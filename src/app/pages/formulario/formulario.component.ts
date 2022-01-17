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
  public form: any = new FormArray([]);
  public allItens: ModelFormularioGet[];

  public formArray: any = new FormGroup({
    valor: new FormControl('', Validators.required),
  });

  constructor(private apiService: ApiService, private toastr: ToastrService) {}

  ngOnInit(): void {}

  infoFormulario(): void {
    this.apiService.getFormulario().subscribe((res: ModelFormularioGet[]) => {
      res.forEach((i) => {
        this.allItens = res;
        this.form.push(new FormControl(i.valor, [Validators.required]));
        //Pasando condição de valor por FormControl - Array
        //Paramentro em HTML para pegar diversos valores por um formControl(condição(input)) --- [formControl]="form.controls[data]
        //https://angular.io/api/forms/FormControl#_forEachChild
      });
    });
  }

  saveFormulario(): void {
    const data = this.form.value.map((data: ModelFormularioPost, value: any) => {
      return {
        id: this.allItens[value].id, //Pegando os dados da variavel this.allItens
        tipo: this.allItens[value].tipo, //Pegando os dados da variavel this.allItens
        valor: data, //Pegando o valor de this.form.value[]
      };
    });

    this.apiService.postFormulario(data).subscribe(
      () => {
        this.toastr.success('Formulário salvo com sucesso');
        setTimeout(() => {
          location.reload();
        }, 500);
      },
      (error) => {
        this.toastr.error(error.error.message);
      }
    );
  }
}
