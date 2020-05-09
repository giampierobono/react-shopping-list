import React from "react";
import { connect, ConnectedProps } from "react-redux";

import {
  removeShoppingListElementProductAction,
  toggleShoppingListProductEditModeAction,
  updateShoppingListElementProductAction,
} from "../../store/actions";
import { RootState } from "../../store/reducers";
import { ShoppingListElement } from "../shopping-list-element";

const mapToDispatch = {
  toggleEditProductMode: (productId: string) =>
    toggleShoppingListProductEditModeAction(productId),
  saveProductChanges: (productID: string, productName: string) =>
    updateShoppingListElementProductAction({
      id: productID,
      changes: { product: productName },
    }),
  removeProduct: (productId: string) =>
    removeShoppingListElementProductAction(productId),
  changeTakenStatus: (productId: string, isTaken: boolean) =>
    updateShoppingListElementProductAction({
      id: productId,
      changes: { taken: isTaken },
    }),
};

const mapToState = (state: RootState) => ({
  isEditMode: state.ui.productsEditModeStatus,
  productsInfo: state.shoppingList.products,
});

const connector = connect(mapToState, mapToDispatch);

type ShoppingListElementsContainerPropsType = ConnectedProps<typeof connector>;

const ShoppingListElementsContainer: React.FC<ShoppingListElementsContainerPropsType> = (
  props: ShoppingListElementsContainerPropsType
): React.ReactElement | null => {
  const productsInfoKeys = Object.keys(props.productsInfo);
  return productsInfoKeys.length ? (
    <ul className="list-group">
      {productsInfoKeys.map((key: string) => (
        <li key={props.productsInfo[key].elementId} className="list-group-item">
          <ShoppingListElement
            isEditMode={props.isEditMode[key]}
            productInfo={props.productsInfo[key]}
            toggleEditProductMode={props.toggleEditProductMode}
            saveProductChanges={props.saveProductChanges}
            removeProduct={props.removeProduct}
            changeTakenStatus={props.changeTakenStatus}
          />
        </li>
      ))}
    </ul>
  ) : null;
};

export default connector(ShoppingListElementsContainer);
