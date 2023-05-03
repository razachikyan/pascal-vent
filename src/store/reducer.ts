import { AnyAction, Reducer } from "redux";

export interface RootState {}

const initialState: RootState = {};

export const rootReducer: Reducer<RootState, AnyAction> = (
  state = initialState,
  action
) => {
  switch (action.type) {
    default:
      return state;
  }
};
