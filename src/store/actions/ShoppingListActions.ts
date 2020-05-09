import { ShoppingListElement } from "../../models";

export const SetNewShoppingListTitle =
  "[UI Actions] Set new title for the shopping list";

export const AddNewShoppingListElement =
  "[UI Actions] Add new element to the shopping list";

export const UpdateShoppingListElementProduct =
  "[UI Actions] Update shopping list product";

export const RemoveShoppingListElementProduct =
  "[UI Actions] Remove shopping list product";

interface SetNewShoppingListTitleAction {
  type: typeof SetNewShoppingListTitle;
  newTitle: string;
}

export interface AddNewShoppingListElementAction {
  type: typeof AddNewShoppingListElement;
  product: string;
}

export interface UpdateShoppingListElementProductAction {
  type: typeof UpdateShoppingListElementProduct;
  productId: string;
  changes: Partial<ShoppingListElement>;
}

export interface RemoveShoppingListElementProductAction {
  type: typeof RemoveShoppingListElementProduct;
  productId: string;
}

export type ShoppingListActionsType =
  | SetNewShoppingListTitleAction
  | AddNewShoppingListElementAction
  | UpdateShoppingListElementProductAction
  | RemoveShoppingListElementProductAction;

export const setNewShoppingListTitleAction = (
  newTitle: string
): ShoppingListActionsType => ({
  type: SetNewShoppingListTitle,
  newTitle: newTitle,
});

export const addNewShoppingListElementAction = (
  product: string
): ShoppingListActionsType => ({
  type: AddNewShoppingListElement,
  product,
});

export const updateShoppingListElementProductAction = (payload: {
  id: string;
  changes: Partial<ShoppingListElement>;
}): UpdateShoppingListElementProductAction => ({
  type: UpdateShoppingListElementProduct,
  productId: payload.id,
  changes: payload.changes,
});

export const removeShoppingListElementProductAction = (
  productId: string
): RemoveShoppingListElementProductAction => ({
  type: RemoveShoppingListElementProduct,
  productId,
});
