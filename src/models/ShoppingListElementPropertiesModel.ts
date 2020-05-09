import { ShoppingListElement } from "./ShoppingListElement";

export interface ShoppingListElementPropertiesModel {
  isEditMode: boolean;
  productInfo: ShoppingListElement;
  toggleEditProductMode: (productId: string) => void;
  saveProductChanges: (productId: string, productName: string) => void;
  removeProduct: (productId: string) => void;
  changeTakenStatus: (productId: string, isTaken: boolean) => void;
}
