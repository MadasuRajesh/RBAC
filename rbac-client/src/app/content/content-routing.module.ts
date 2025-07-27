import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContentListComponent } from './content-list/content-list.component';
import { ContentFormComponent } from './content-form/content-form.component';
import { AuthGuard } from '../auth/auth.guard';

const routes: Routes = [
  { path: '', component: ContentListComponent, canActivate: [AuthGuard], data: { roles: ['Admin', 'Editor', 'Viewer'] } },
  { path: 'create', component: ContentFormComponent, canActivate: [AuthGuard], data: { roles: ['Admin', 'Editor'] } },
  { path: 'edit/:id', component: ContentFormComponent, canActivate: [AuthGuard], data: { roles: ['Admin', 'Editor'] } }
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ContentRoutingModule { }
