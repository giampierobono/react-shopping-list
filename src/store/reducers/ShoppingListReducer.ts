import { v4 as uuidv4 } from "uuid";

import {
  AddNewShoppingListElement,
  RemoveShoppingListElementProduct,
  SetNewShoppingListTitle,
  ShoppingListActionsType,
  UpdateShoppingListElementProduct,
} from "../actions";
import { ShoppingListElement } from "../../models";

export interface ShoppingListState {
  title: string;
  products: { [key: string]: ShoppingListElement };
}

export const shoppingListInitialState: ShoppingListState = {
  title: "",
  products: {},
};

export const shoppingListReducer = (
  state: ShoppingListState = shoppingListInitialState,
  action: ShoppingListActionsType
): ShoppingListState => {
  switch (action.type) {
    case SetNewShoppingListTitle: {
      return {
        ...state,
        title: action.newTitle,
      };
    }
    case AddNewShoppingListElement: {
      const elementId = uuidv4();
      return {
        ...state,
        products: {
          ...state.products,
          [elementId]: {
            elementId,
            product: action.product,
            taken: false,
          },
        },
      };
    }
    case UpdateShoppingListElementProduct: {
      return {
        ...state,
        products: {
          ...state.products,
          [action.productId]: {
            ...(state.products[action.productId] || {}),
            ...action.changes,
          },
        },
      };
    }
    case RemoveShoppingListElementProduct: {
      const cloneState = { ...state };
      cloneState.products = { ...state.products };
      delete cloneState.products[action.productId];
      return cloneState;
    }
    default: {
      return state;
    }
  }
};
