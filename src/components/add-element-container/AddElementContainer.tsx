import React from "react";
import { addNewShoppingListElementAction } from "../../store";
import { connect, ConnectedProps } from "react-redux";
import { AddElement } from "../add-element";

const mapDispatch = {
  addProduct: (product: string) => addNewShoppingListElementAction(product),
};

const connector = connect(null, mapDispatch);

type AddElementContainerPropsType = ConnectedProps<typeof connector>;

const AddElementContainer: React.FC<AddElementContainerPropsType> = (
  props: AddElementContainerPropsType
): React.ReactElement => <AddElement addElement={props.addProduct} />;

export default connector(AddElementContainer);
