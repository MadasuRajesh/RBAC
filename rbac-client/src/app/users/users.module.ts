import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersRoutingModule } from './users-routing.module';
import { SharedModule } from '../shared/shared.module';
import { ReactiveFormsModule } from '@angular/forms';
import { UserFormComponent } from './user-form/user-form.component';
import { UserListComponent } from './user-list/user-list.component';


@NgModule({
  declarations: [
    UserListComponent,
    UserFormComponent],
  imports: [
    CommonModule,
    UsersRoutingModule,
    ReactiveFormsModule,
    SharedModule
  ]
})
export class UsersModule { }
