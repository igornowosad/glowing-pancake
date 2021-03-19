import { User } from '@app/shared';

export const FEATURE_NAME = 'usersList';

export interface UserModel {
  user: User;
  loading: boolean;
}

export const initialState: UserModel = {
  user: null,
  loading: false,
};
