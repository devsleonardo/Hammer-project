import { ApiService } from './../../resources/services/api.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tabela',
  templateUrl: './tabela.component.html',
  styleUrls: ['./tabela.component.scss'],
})
export class TabelaComponent implements OnInit {
  public info: any;
  constructor(private apiService: ApiService) {}

  ngOnInit() {}

  infoTabela() {
    this.apiService.getTabela().subscribe((res) => {
      this.info = res;
      console.log(this.info);
    });
  }
}
