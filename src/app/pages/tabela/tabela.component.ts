import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-tabela',
  templateUrl: './tabela.component.html',
  styleUrls: ['./tabela.component.scss'],
})
export class TabelaComponent implements OnInit {
  constructor(private apiService: ApiService) {}

  ngOnInit() {
    this.update();
  }

  public update() {
    this.apiService.tabela().subscribe((res) => {
      console.log(res);
    });
  }
}
