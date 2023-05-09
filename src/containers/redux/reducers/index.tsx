import { combineReducers } from "redux";
import { productReducer, selectedProductReducer } from "./productReducer";

export interface RootState {
  productState: ReturnType<typeof productReducer>;
  product: ReturnType<typeof selectedProductReducer>;
}

const rootReducer = combineReducers({
  productState: productReducer,
  product: selectedProductReducer,
});

export default rootReducer;
