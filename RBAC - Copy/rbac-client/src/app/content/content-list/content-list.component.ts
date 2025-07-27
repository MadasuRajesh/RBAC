import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/auth.service';
import { Role } from 'src/app/shared/enums';
import { Content } from 'src/app/shared/models/content.model';
import { ContentService } from 'src/app/shared/services/content.service';

@Component({
  selector: 'app-content-list',
  templateUrl: './content-list.component.html',
  styleUrls: ['./content-list.component.scss']
})
export class ContentListComponent implements OnInit {
  contents: Content[] = [];
  loading = true;
  error: string | null = null;

  constructor(private contentService: ContentService,
    private authService: AuthService,
    private router: Router
  ) {}

  get isViewer(): boolean {
    return Role.Viewer == this.authService.getUserRoles();
  }
  ngOnInit(): void {
    this.contentService.getAll().subscribe({
      next: (data) => {
        this.contents = data;
        this.loading = false;
      },
      error: (err) => {
        this.error = 'Failed to load content.';
        this.loading = false;
      }
    });
  }


  onAdd() {
    this.router.navigate(['/content/create']);
  }

  onEdit(id: number) {
    this.router.navigate([`/content/edit/${id}`]);
  }

  onDelete(id: number) {
   this.contentService.delete(id);
  }
}
