import { ActionsObservable, ofType } from "redux-observable";
import { Action } from "redux";
import { filter, map, mapTo } from "rxjs/operators";

import {
  AddNewShoppingListElement,
  AddNewShoppingListElementAction,
  RemoveShoppingListElementProduct,
  RemoveShoppingListElementProductAction,
  removeShoppingListElementProductUiAction,
  SetNewShoppingListTitle,
  toggleShoppingListProductEditModeAction,
  toggleShoppingListTitleEditMode,
  UpdateShoppingListElementProduct,
  UpdateShoppingListElementProductAction,
} from "../actions";

export const disableEditModeOnSetTitle$ = (
  action$: ActionsObservable<Action>
) =>
  action$.pipe(
    ofType(SetNewShoppingListTitle),
    mapTo(toggleShoppingListTitleEditMode())
  );

export const removeProductEditStatusOnProductDeletion$ = (
  actions$: ActionsObservable<Action>
) =>
  actions$.pipe(
    ofType(RemoveShoppingListElementProduct),
    map((action) =>
      removeShoppingListElementProductUiAction(
        (action as RemoveShoppingListElementProductAction).productId
      )
    )
  );

export const toggleProductEditModeOnSaveProductNameChanges$ = (
  actions$: ActionsObservable<Action>
) =>
  actions$.pipe(
    ofType(UpdateShoppingListElementProduct),
    filter(
      (action) =>
        !!(action as UpdateShoppingListElementProductAction).changes.product
    ),
    map((action) =>
      toggleShoppingListProductEditModeAction(
        (action as UpdateShoppingListElementProductAction).productId
      )
    )
  );
