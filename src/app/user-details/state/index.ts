import {
  reducer as UserReducer,
  UserModel,
  UserEffects
} from './user';

export interface UserDetails {
  user: UserModel;
}

export const reducers = {
  user: UserReducer
};

export const effects = [
  UserEffects
];
