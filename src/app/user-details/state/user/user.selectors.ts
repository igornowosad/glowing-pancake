import { createFeatureSelector, createSelector } from '@ngrx/store';

import { UserDetails } from '@app/user-details/state';
import { FEATURE_NAME } from './user.model';

export const selectUsersState = createFeatureSelector<UserDetails>(FEATURE_NAME);

export const selectUser = createSelector(
  selectUsersState,
  state => state.user.user
);

export const selectLoading = createSelector(
  selectUsersState,
  state => state.user.loading
);
