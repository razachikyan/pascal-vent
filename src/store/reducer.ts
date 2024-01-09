import { AnyAction, Reducer } from "redux";
import { HeaderState } from "./header/actions";
import { GeneralState, initialGeneralState } from "./main/general/action";
import { ServicesState } from "./main/services/actions";
import { FooterState } from "./footer/actions";

export interface RootState {
  header: HeaderState;
  main: {
    general: GeneralState;
    services: ServicesState;
  };
  footer: FooterState;
}

const initialState: RootState = {
  header: {},
  main: {
    general: initialGeneralState,
    services: {},
  },
  footer: {},
};

export type Action = HeaderState | GeneralState | ServicesState | FooterState;

export const rootReducer: Reducer<RootState, AnyAction> = (
  state = initialState,
  action
) => {
  switch (action.type) {
    default:
      return state;
  }
};
