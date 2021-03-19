import { createAction, props } from '@ngrx/store';

import { User } from '@app/shared';

export const getUser = createAction(
  '[User] Get user',
  props<{ id: User['id'] }>()
);
export const getUserSuccess = createAction(
  '[User] Get user success',
  props<{ user: User }>()
);
export const getUserFail = createAction('[User] Get user fail');

export const addUser = createAction(
  '[User] Add user',
  props<{ user: Partial<User> }>()
);
export const addUserSuccess = createAction(
  '[User] Add user success',
  props<{ user: any }>()
);
export const addUserFail = createAction('[User] Add user fail');

export const editUser = createAction(
  '[User] Edit user',
  props<{ id: User['id'], data: Partial<User> }>()
);
export const editUserSuccess = createAction(
  '[User] Edit user success',
  props<{ user: any }>()
);
export const editUserFail = createAction('[User] Edit user fail');

