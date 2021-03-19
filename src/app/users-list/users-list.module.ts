import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { MaterialModule } from '@app/core/material.module';
import { UsersListRoutingModule } from './users-list-routing.module';
import { effects, reducers } from './state';
import { components } from './components';
import { FEATURE_NAME } from './state/users';

@NgModule({
  declarations: [...components],
  imports: [
    CommonModule,
    MaterialModule,
    UsersListRoutingModule,
    StoreModule.forFeature(FEATURE_NAME, reducers),
    EffectsModule.forFeature(effects)
  ]
})
export class UsersListModule { }
