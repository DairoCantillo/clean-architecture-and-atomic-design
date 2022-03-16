import { Action, ActionType } from "../types/userTypes";

export interface IUserState {
  isLogin?: boolean;
  name?: string;
  avatar?: string;
  isLoading?: boolean;
}

const UserInitialState: IUserState = {
  isLogin: true,
  name: "",
  avatar: "",
  isLoading: false,
};
export const userReducer = (state = UserInitialState, action: Action) => {
  switch (action.type) {
    case ActionType.ADD_USER:
      return { ...state, isLoading: action.payload };
    case ActionType.ADD_USER_SUCCESS:
      return {
        ...state,
        isLoading: false,
        isLogin: true,
        name: action.payload.name,
        avatar: action.payload.avatar,
      };
    case ActionType.ADD_USER_ERROR:
      return {
        ...state,
        isLoading: false,
        isLogin: false,
        error: action.payload,
      };
    default:
      return state;
  }
};
