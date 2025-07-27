import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { User } from 'src/app/shared/models/user.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {
  users: User[] = [];
  loading = true;
  error: string | null = null;

  constructor(private userService: UserService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.fetchUsers();
  }

  fetchUsers() {
    this.loading = true;
    this.userService.getAllUsers().subscribe({
      next: (data) => {
        this.users = data;
        this.loading = false;
      },
      error: (err) => {
        this.error = 'Failed to fetch users.';
        this.loading = false;
      }
    });
  }

  navigateToUserForm(userId?: string) {
    if (userId) {
      this.router.navigate([`/users/edit/${userId}`]);
    } else {
      this.router.navigate(['/users/create']);
    }
  }

  deleteUser(userId?: string){
   if(userId){
    this.userService.deleteUser(userId).subscribe(res=>{    });
   }
  }
}
