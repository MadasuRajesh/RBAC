import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/core/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  loginForm: FormGroup;
  error: string | null = null;

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) {
    this.loginForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  onSubmit(): void {
    if (this.loginForm.invalid) return;

    const { username, password } = this.loginForm.value;

    this.authService.login({ username, password }).subscribe({
      next: () => {
        const roles = this.authService.getUserRoles();
    
        if (roles.includes('Admin')) {
          this.router.navigate(['/users']);
        } else if (roles.includes('Editor') || roles.includes('Viewer')) {
          this.router.navigate(['/content']);
        } else {
          this.router.navigate(['/auth/login']);
        }
      },
      error: err => {
        this.error = 'Invalid credentials';
      }
    });
    
  }
}
