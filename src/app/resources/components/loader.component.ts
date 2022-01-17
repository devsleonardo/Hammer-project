import { Subject } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { LoaderService } from './loader.service';

@Component({
  selector: 'app-loader',
  template: '<ngx-loading [show]="loading | async"></ngx-loading>',
})
export class LoaderComponent implements OnInit {
  public loading: Subject<boolean> = this.loaderService.isLoading;

  constructor(private loaderService: LoaderService) {}

  ngOnInit(): void {}
}
