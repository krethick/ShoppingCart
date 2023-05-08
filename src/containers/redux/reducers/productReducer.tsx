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
  products: [
    {
      id: 1,
      title: "Dipesh",
      category: "programmer",
    },
  ],
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
