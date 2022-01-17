import { ApiService } from './../../resources/services/api.service';
import { Component, OnInit } from '@angular/core';

//Model
import { ModelTabela } from '../../resources/model/modelTabela';

@Component({
  selector: 'app-tabela',
  templateUrl: './tabela.component.html',
  styleUrls: ['./tabela.component.scss'],
})
export class TabelaComponent implements OnInit {
  public allItens: any;
  public allColunas: string[];

  constructor(private apiService: ApiService) {}

  ngOnInit() {}

  infoTabela(): void {
    this.apiService.getTabela().subscribe((res) => {
      this.allColunas = Object.keys(res[0]);
      this.allItens = res;
    });
  }
}
