import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './core/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {

  constructor(private router: Router,
    private auth: AuthService
  ) {}

  ngOnInit(): void {
   
  }
}
