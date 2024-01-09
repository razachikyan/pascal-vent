import { AnyAction, Reducer } from "redux";
import { GeneralState, initialGeneralState } from "./action";

export const generalReducer: Reducer<GeneralState, AnyAction> = (
  state = initialGeneralState,
  action
) => {
  switch (action.type) {
    default:
      return state;
  }
};
