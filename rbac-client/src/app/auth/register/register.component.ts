import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/core/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
  registerForm: FormGroup;
  error: string | null = null;

  roles = ['Editor', 'Viewer'];

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) {
    this.registerForm = this.fb.group({
      username: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
      role: ['', Validators.required]
    });
  }

  onSubmit(): void {
    if (this.registerForm.invalid) return;

    const user = this.registerForm.value;
    this.authService.register(user).subscribe({
      next: () => this.router.navigate(['/auth/login']),
      error: err => {
        this.error = err.error || 'Registration failed.';
      }
    });
  }
}
