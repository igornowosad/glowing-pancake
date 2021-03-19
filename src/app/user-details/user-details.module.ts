import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { MaterialModule } from '@app/core/material.module';
import { components } from './components';
import { effects, reducers } from './state';
import { UserDetailsRoutingModule } from './user-details-routing.module';
import { FEATURE_NAME } from './state/user';


@NgModule({
  declarations: [
    ...components
  ],
  imports: [
    CommonModule,
    MaterialModule,
    ReactiveFormsModule,
    StoreModule.forFeature(FEATURE_NAME, reducers),
    EffectsModule.forFeature(effects),
    UserDetailsRoutingModule
  ]
})
export class UserDetailsModule { }
