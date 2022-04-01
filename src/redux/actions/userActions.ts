import { ActionType } from "../types/userTypes";
import { IUserState } from '../reducers/userReducer';

export const getUser = () => ({
  type: ActionType.ADD_USER,
});
export const getUserSuccess = (user: IUserState) => ({
  type: ActionType.ADD_USER_SUCCESS,
  payload: user,
});
export const getUserError = (error: string) => ({
  type: ActionType.ADD_USER_ERROR,
  payload: error,
});

