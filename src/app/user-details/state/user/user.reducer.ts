import { Action, createReducer, on } from '@ngrx/store';

import { initialState, UserModel } from './user.model';
import * as fromActions from './user.actions';

const userReducer = createReducer(
  initialState,

  on(fromActions.getUser, (state) => ({ ...state, loading: true })),
  on(fromActions.getUserSuccess, (state, { user }) => ({ ...state, user, loading: false })),
  on(fromActions.getUserFail, (state) => ({ ...state, loading: false })),
);

export const reducer = (state: UserModel | undefined, action: Action) => userReducer(state, action);
