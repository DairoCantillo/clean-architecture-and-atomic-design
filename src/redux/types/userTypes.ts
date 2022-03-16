import { IUserState } from "../reducers/userReducer";

export enum ActionType {
  ADD_USER = "ADD_USER",
  UPDATE_USER_LOGIN = "UPDATE_USER_LOGIN",
  ADD_USER_SUCCESS = "ADD_USER_SUCCESS",
  ADD_USER_ERROR = "ADD_USER_ERROR",
}

interface actionPending {
  type: ActionType.ADD_USER;
  payload: IUserState;
}

interface actionSuccess {
  type: ActionType.ADD_USER_SUCCESS;
  payload: IUserState;
}

interface actionError {
  type: ActionType.ADD_USER_ERROR;
  payload: string;
}

export type Action = actionPending | actionSuccess | actionError;
