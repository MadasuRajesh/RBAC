import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth/auth.guard';
import { Role } from './shared/enums';

const routes: Routes = [
  { path: '', redirectTo: '/auth/login', pathMatch: 'full' },
  { path: 'auth', loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule) },
  { path: 'users', 
    loadChildren: () => import('./users/users.module').then(m => m.UsersModule),
    canActivate: [AuthGuard],
    data: { roles: [Role.Admin] } // only Admin can access
   },
  { path: 'content', 
    loadChildren: () => import('./content/content.module').then(m => m.ContentModule),
    canActivate: [AuthGuard],
    data: { roles: [Role.Admin, Role.Editor, Role.Viewer] } 
   }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
