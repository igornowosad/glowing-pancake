import { Action, createReducer, on } from '@ngrx/store';

import { initialState, UsersModel } from './users.model';
import * as fromActions from './users.actions';

const usersReducer = createReducer(
  initialState,

  on(fromActions.getUsers, (state) => ({ ...state, loading: true })),
  on(fromActions.getUsersSuccess, (state, { users }) => ({ ...state, users, loading: false })),
  on(fromActions.getUsersFail, (state, { error }) => ({ ...state, users: [], loading: false, errorMessage: error.message })),

  on(fromActions.removeUserSuccess, (state, { id }) => ({ ...state, users: state.users.filter(user => user.id !== id), loading: false })),
  on(fromActions.removeUserFail, (state) => ({ ...state, loading: false })),

  on(fromActions.searchByName, (state, { name }) => ({ ...state, searchValue: name })),
  on(fromActions.clearSearchByName, (state) => ({ ...state, searchValue: '' }))
);

export const reducer = (state: UsersModel | undefined, action: Action) => usersReducer(state, action);
