import React, { useState } from "react";

import { ShoppingListElementPropertiesModel } from "../../models";

const ShoppingListElement: React.FC<ShoppingListElementPropertiesModel> = (
  props: ShoppingListElementPropertiesModel
): React.ReactElement => {
  const productId = props.productInfo.elementId;
  const [editProductName, setEditProductName] = useState(
    props.productInfo.product
  );

  const onEditInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();
    setEditProductName(event.target.value);
  };

  const elementDisplay = !props.isEditMode ? (
    <>
      <input
        className="form-check-input"
        type="checkbox"
        id={productId}
        checked={props.productInfo.taken}
        onChange={() =>
          props.changeTakenStatus(productId, !props.productInfo.taken)
        }
      />
      <label className="form-check-label" htmlFor={productId}>
        {props.productInfo.product}
      </label>
      <i
        role="button"
        className="material-icons"
        onClick={() => props.toggleEditProductMode(productId)}
      >
        autorenew
      </i>
    </>
  ) : (
    <>
      <div className="form-group">
        <label className="sr-only" htmlFor={"shopping-list-edit" + productId}>
          Edit product
        </label>
        <input
          id={"shopping-list-edit" + productId}
          className="form-control"
          type="text"
          value={editProductName}
          onChange={onEditInputChange}
        />
        <i
          role="button"
          className="material-icons"
          onClick={() => props.saveProductChanges(productId, editProductName)}
        >
          save
        </i>
      </div>
    </>
  );

  return (
    <div className="row">
      <div className="col">
        {elementDisplay}
        <i
          role="button"
          className="material-icons"
          onClick={() => props.removeProduct(productId)}
        >
          delete_forever
        </i>
      </div>
    </div>
  );
};

export default ShoppingListElement;
