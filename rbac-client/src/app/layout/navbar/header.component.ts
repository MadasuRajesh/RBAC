import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/core/auth.service';
import { Role } from 'src/app/shared/enums';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
  }

  get isAdmin(): boolean {
    return this.authService.getUserRoles() == Role.Admin;
  }
  get userLoggedIn() {
    return this.authService.isLoggedIn();
  }

  get isEditorOrAdminOrViewer(): boolean {
    return [Role.Admin, Role.Editor, Role.Viewer].includes(this.authService.getUserRoles());
  }
  get userName() {
    return this.authService.getUserRoles();
  }
  logout() {
    this.authService.logout(); // Clear token, etc.
  }
}
