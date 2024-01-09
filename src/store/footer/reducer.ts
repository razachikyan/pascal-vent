import { AnyAction, Reducer } from "redux";
import { FooterState } from "./actions";

export const footerReducer: Reducer<FooterState, AnyAction> = (
  state = {},
  action
) => {
  switch (action.type) {
    default:
      return state;
  }
};
