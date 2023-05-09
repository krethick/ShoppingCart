import { ActionType } from "../constants/action-types";

interface ProductType {
  id: number;
  title: string;
  category: string;
}

interface SetProductsAction {
  type: typeof ActionType.SET_PRODUCTS;
  payload: ProductType[];
}

interface SelectedProductsAction {
  type: typeof ActionType.SELECTED_PRODUCTS;
  payload: ProductType;
}

interface RemoveSelectedProductsAction {
  type: typeof ActionType.REMOVE_SELECTED_PRODUCTS;
}

export type ProductAction =
  | SetProductsAction
  | RemoveSelectedProductsAction
  | SelectedProductsAction;


export const setProducts = (products: ProductType[]): SetProductsAction => ({
  type: ActionType.SET_PRODUCTS,
  payload: products,
});

export const selectedProducts = (product: ProductType): SelectedProductsAction => ({
  type: ActionType.SELECTED_PRODUCTS,
  payload: product,
});

export const removeSelectedProduct = (): RemoveSelectedProductsAction => {
  return {
    type: ActionType.REMOVE_SELECTED_PRODUCTS,
  };
};
