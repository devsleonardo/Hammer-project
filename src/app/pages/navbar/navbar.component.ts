import { Component, OnInit } from '@angular/core';

//Service
import { AuthService } from './../../resources/services/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  constructor(private authService: AuthService) {}

  ngOnInit(): void {}

  public logout(): void {
    this.authService.logout();
  }
}
