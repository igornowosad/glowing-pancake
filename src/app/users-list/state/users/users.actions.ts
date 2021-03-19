import { createAction, props } from '@ngrx/store';
import { HttpErrorResponse } from '@angular/common/http';

import { User } from '@app/shared';

export const getUsers = createAction('[Users] Get users');
export const getUsersSuccess = createAction(
  '[Users] Get users success',
  props<{ users: User[] }>()
);
export const getUsersFail = createAction(
  '[Users] Get users fail',
  props<{ error: HttpErrorResponse }>()
);

export const removeUser = createAction(
  '[User] Remove user',
  props<{ id: User['id'] }>()
);
export const removeUserSuccess = createAction(
  '[User] Remove user success',
  props<{ id: User['id'] }>()
);
export const removeUserFail = createAction(
  '[User] Remove user fail',
  props<{ error: HttpErrorResponse }>()
);

export const searchByName = createAction(
  '[Users] Search by name',
  props<{ name: User['name'] }>()
);
export const clearSearchByName = createAction('[Users] Clear search by name');
