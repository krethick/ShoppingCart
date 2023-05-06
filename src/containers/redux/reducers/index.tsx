import { combineReducers } from "redux";
import { productReducer } from "./productReducer";

export interface RootState {
  productState: ReturnType<typeof productReducer>;
}

const rootReducer = combineReducers({
  productState: productReducer,
});

export default rootReducer;
