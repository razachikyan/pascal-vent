import { AnyAction, Reducer } from "redux";
import { HeaderState } from "./actions";

export const headerReducer: Reducer<HeaderState, AnyAction> = (
  state = {},
  action
) => {
  switch (action.type) {
    default:
      return state;
  }
};
