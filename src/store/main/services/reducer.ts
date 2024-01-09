import { AnyAction, Reducer } from "redux";
import { ServicesState } from "./actions";

export const servicesReducer: Reducer<ServicesState, AnyAction> = (
  state = {},
  action
) => {
  switch (action.type) {
    default:
      return state;
  }
};
