import { combineReducers } from "redux";
import { uiReducer, UIState } from "./UIReducer";
import { shoppingListReducer, ShoppingListState } from "./ShoppingListReducer";

export const rootReducer = combineReducers({
  ui: uiReducer,
  shoppingList: shoppingListReducer,
});

export interface RootState {
  ui: UIState;
  shoppingList: ShoppingListState;
}
