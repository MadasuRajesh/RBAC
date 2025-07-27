import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContentRoutingModule } from './content-routing.module';
import { SharedModule } from '../shared/shared.module';
import { ContentListComponent } from './content-list/content-list.component';
import { ContentFormComponent } from './content-form/content-form.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    ContentListComponent,
    ContentFormComponent
  ],
  imports: [
    CommonModule,
    ContentRoutingModule,
    ReactiveFormsModule,
    SharedModule
  ]
})
export class ContentModule { }
