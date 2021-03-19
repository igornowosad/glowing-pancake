import { createFeatureSelector, createSelector } from '@ngrx/store';

import { UserList } from '..';
import { FEATURE_NAME } from './users.model';

export const selectUsersState = createFeatureSelector<UserList>(FEATURE_NAME);

export const selectUsers = createSelector(
  selectUsersState,
  state => state.list.users
);

export const selectSearchValue = createSelector(
  selectUsersState,
  state => state.list.searchValue
);

export const selectLoading = createSelector(
  selectUsersState,
  state => state.list.loading
);

export const selectErrorMessage = createSelector(
  selectUsersState,
  state => state.list.errorMessage
);

export const selectFilteredUsers = createSelector(
  selectSearchValue,
  selectUsers,
  (searchValue, users) => users.filter((user) => user.name?.toLowerCase().includes(searchValue.toLowerCase()))
);
