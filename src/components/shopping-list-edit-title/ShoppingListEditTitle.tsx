import React, { FormEvent, useState } from "react";
import { ShoppingListEditTitlePropertiesModel } from "../../models";

const ShoppingListEditTitle: React.FC<ShoppingListEditTitlePropertiesModel> = (
  props: ShoppingListEditTitlePropertiesModel
): React.ReactElement => {
  const [title, setTitle] = useState(props.title);
  const onFormSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    props.editShoppingListTitleSubmit(title);
  };
  const onInputValueChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();
    setTitle(event.target.value);
  };

  return (
    <form onSubmit={onFormSubmit}>
      <div className="form-group">
        <label htmlFor="shopping-list-edit-title">Shopping list title</label>
        <input
          id="shopping-list-edit-title"
          className="form-control"
          type="text"
          value={title}
          onChange={onInputValueChange}
        />
      </div>
      <button type="submit" className="btn btn-primary">
        Save
      </button>
    </form>
  );
};

export default ShoppingListEditTitle;