import { User } from '@app/shared';

export const FEATURE_NAME = 'usersList';

export interface UsersModel {
  searchValue: string;
  users: User[];
  loading: boolean;
  errorMessage: string;
}

export const initialState: UsersModel = {
  searchValue: '',
  users: [],
  loading: false,
  errorMessage: null,
};
