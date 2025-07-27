import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Content } from 'src/app/shared/models/content.model';
import { ContentService } from 'src/app/shared/services/content.service';

@Component({
  selector: 'app-content-form',
  templateUrl: './content-form.component.html',
  styleUrls: ['./content-form.component.scss']
})
export class ContentFormComponent implements OnInit {
  contentForm: FormGroup;
  isEditMode = false;
  contentId: number | null = null;
  loading = false;
  error: string | null = null;

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private contentService: ContentService
  ) {
    this.contentForm = this.fb.group({
      title: ['', Validators.required],
      body: ['', Validators.required]
    });
  }

  ngOnInit(): void {
    this.contentId = Number(this.route.snapshot.paramMap.get('id'));
    this.isEditMode = !!this.contentId;

    if (this.isEditMode && this.contentId) {
      this.loading = true;
      this.contentService.getById(this.contentId).subscribe({
        next: (data) => {
          this.contentForm.patchValue(data);
          this.loading = false;
        },
        error: () => {
          this.error = 'Failed to load content';
          this.loading = false;
        }
      });
    }
  }

  onSubmit(): void {
    if (this.contentForm.invalid) return;

    const content: Content = this.contentForm.value;

    if (this.isEditMode && this.contentId) {
      this.contentService.update(this.contentId, content).subscribe({
        next: () => this.router.navigate(['/content']),
        error: () => this.error = 'Update failed'
      });
    } else {
      this.contentService.create(content).subscribe({
        next: () => this.router.navigate(['/content']),
        error: () => this.error = 'Creation failed'
      });
    }
  }

  onCancel(): void {
    this.router.navigate(['/content']);
  }
}
