import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../user.service';
import { tap } from 'rxjs';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.scss']
})
export class UserFormComponent implements OnInit {
  userForm: FormGroup;
  isEdit = false;
  userId: string | null = null;
  roles = ['Admin','Editor', 'Viewer'];
  error: string | null = null;

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private userService: UserService
  ) {
    this.userForm = this.fb.group({
      username: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      role: ['', Validators.required],
      phoneNumber:['', Validators.required],
      password: [''] // required only on create
    });
  }

  ngOnInit(): void {
    this.userId = this.route.snapshot.paramMap.get('id');
    this.isEdit = !!this.userId;

    if (this.isEdit) {
      this.userService.getUserById(this.userId!).subscribe({
        next: user => {
          this.userForm.patchValue({
            username: user.userName,
            phoneNumber: user.phoneNumber,
            email: user.email,
            role: user.roles[0] || ''
          });
          this.userForm.get('password')?.clearValidators();
          this.userForm.get('password')?.updateValueAndValidity();
          this.error = ''
        },
        error: () => this.error = 'Failed to load user.'
      });
    } else {
      this.userForm.get('password')?.setValidators(Validators.required);
    }
  }

  onSubmit(): void {
    if (this.userForm.invalid) return;
  
    const user = this.userForm.value;
  
    if (this.isEdit) {
      this.userService.updateUser(this.userId!, user).pipe(
        tap(() => console.log('User created')),
      ).subscribe({
        next: res => {
          console.log('User updated response:', res); // Debug output
          this.router.navigate(['/users']);
        },
        error: err => {
          console.error('Error creating user:', err); // Show full error
          this.error = 'Failed to create user.';
        }
      });
    } else {
      this.userService.createUser(user).subscribe({
        next: res => {
          console.log('User created response:', res); // Debug output
          this.router.navigate(['/users']);
        },
        error: err => {
          console.error('Error creating user:', err); // Show full error
          this.error = 'Failed to create user.';
        }
      });
      
    }
  }
  
}
