import { ActionType } from "../constants/action-types";

interface Product {
  id: number;
  title: string;
  category: string;
}

interface Action {
  type: string;
  payload: Product[];
}

const initialState = {
  products: [],
};

export const productReducer = (state = initialState, { type, payload }: Action) => {
  switch (type) {
    case ActionType.SET_PRODUCTS:
      return {
        ...state,
        products: payload,
      };
    default:
      return state;
  }
};

export const selectedProductReducer = (state = {}, { type, payload }: Action) => {
  switch (type) {
    case ActionType.SELECTED_PRODUCTS:
      return { ...state, ...payload };
    case ActionType.REMOVE_SELECTED_PRODUCTS:
      return {};
    default:
      return state;
  }
};
