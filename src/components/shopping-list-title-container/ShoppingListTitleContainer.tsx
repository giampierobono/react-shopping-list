import React from "react";
import { connect, ConnectedProps } from "react-redux";

import { RootState } from "../../store/reducers";
import { ShoppingListEditTitle } from "../shopping-list-edit-title";
import { ShoppingListDisplayTitle } from "../shopping-list-display-title";
import {
  setNewShoppingListTitleAction,
  toggleShoppingListTitleEditMode,
} from "../../store/actions";

const mapState = (state: RootState) => ({
  title: state.shoppingList.title,
  isEditMode: state.ui.isShoppingListTitleEditModeEnabled,
});

const mapDispatch = {
  setInputTitle: (title: string) => setNewShoppingListTitleAction(title),
  toggleEditMode: () => toggleShoppingListTitleEditMode(),
};

const connector = connect(mapState, mapDispatch);

type ShoppingListTitleContainerPropsType = ConnectedProps<typeof connector>;

const ShoppingListTitleContainer: React.FC<ShoppingListTitleContainerPropsType> = (
  props: ShoppingListTitleContainerPropsType
): React.ReactElement => {
  return props.isEditMode ? (
    <ShoppingListEditTitle
      title={props.title}
      editShoppingListTitleSubmit={props.setInputTitle}
    />
  ) : (
    <ShoppingListDisplayTitle
      title={props.title}
      showEditTitle={props.toggleEditMode}
    />
  );
};

export default connector(ShoppingListTitleContainer);
