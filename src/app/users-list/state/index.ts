import { reducer, UsersEffects, UsersModel } from './users';

export interface UserList {
  list: UsersModel;
}

export const reducers = {
  list: reducer
};

export const effects = [
  UsersEffects
];
