import {
  RemoveShoppingProductEditMode,
  ToggleShoppingProductEditMode,
  ToggleShoppingTitleEditMode,
  UIActionsType,
} from "../actions/UIActions";

export interface UIState {
  isShoppingListTitleEditModeEnabled: boolean;
  productsEditModeStatus: { [key: string]: boolean };
}

export const uiInitialState: UIState = {
  isShoppingListTitleEditModeEnabled: true,
  productsEditModeStatus: {},
};

export const uiReducer = (
  state: UIState = uiInitialState,
  action: UIActionsType
): UIState => {
  switch (action.type) {
    case ToggleShoppingTitleEditMode: {
      return {
        ...state,
        isShoppingListTitleEditModeEnabled: !state.isShoppingListTitleEditModeEnabled,
      };
    }
    case ToggleShoppingProductEditMode: {
      return {
        ...state,
        productsEditModeStatus: {
          ...state.productsEditModeStatus,
          [action.productId]:
            !state.productsEditModeStatus[action.productId] || false,
        },
      };
    }
    case RemoveShoppingProductEditMode: {
      const cloneState = { ...state };
      delete cloneState.productsEditModeStatus[action.productId];
      return cloneState;
    }
    default: {
      return state;
    }
  }
};
