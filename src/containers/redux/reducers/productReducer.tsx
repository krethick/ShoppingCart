import { ActionType } from "../constants/action-types";
import { ProductAction } from "../actions/productsActions";

interface ProductState {
  products: ProductType[];
  selectedProduct: ProductType | null;
}

interface ProductType {
  id: number;
  title: string;
  category: string;
}

const initialState: ProductState = {
  products: [],
  selectedProduct: null,
};

export const productReducer = (
  state: ProductState = initialState,
  action: ProductAction
): ProductState => {
  switch (action.type) {
    case ActionType.SET_PRODUCTS:
      return {
        ...state,
        products: action.payload,
      };
    case ActionType.SELECTED_PRODUCTS:
      return {
        ...state,
        selectedProduct: action.payload,
      };

    default:
      return state;
  }
};
