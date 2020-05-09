export const ToggleShoppingTitleEditMode =
  "[UI Actions] Toggle edit mode for title";

export const ToggleShoppingProductEditMode =
  "[UI Actions] Toggle edit mode for product";

export const RemoveShoppingProductEditMode =
  "[UI Actions] Remove edit mode for product";

export interface ToggleShoppingTitleEditModeAction {
  type: typeof ToggleShoppingTitleEditMode;
}

export interface ToggleShoppingListProductEditModeAction {
  type: typeof ToggleShoppingProductEditMode;
  productId: string;
}

export interface RemoveShoppingListProductEditModeUiAction {
  type: typeof RemoveShoppingProductEditMode;
  productId: string;
}

export type UIActionsType =
  | ToggleShoppingTitleEditModeAction
  | ToggleShoppingListProductEditModeAction
  | RemoveShoppingListProductEditModeUiAction;

export const toggleShoppingListTitleEditMode = (): UIActionsType => ({
  type: ToggleShoppingTitleEditMode,
});

export const toggleShoppingListProductEditModeAction = (
  productId: string
): ToggleShoppingListProductEditModeAction => ({
  type: ToggleShoppingProductEditMode,
  productId,
});

export const removeShoppingListElementProductUiAction = (productId: string) => ({
  type: RemoveShoppingProductEditMode,
  productId,
});
