import { combineEpics } from "redux-observable";
import {
  disableEditModeOnSetTitle$,
  removeProductEditStatusOnProductDeletion$,
  toggleProductEditModeOnSaveProductNameChanges$,
} from "./ShoppingListEpics";

export const rootEpic = combineEpics(
  disableEditModeOnSetTitle$,
  removeProductEditStatusOnProductDeletion$,
  toggleProductEditModeOnSaveProductNameChanges$
);
