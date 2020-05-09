import React, { ChangeEvent, ReactElement, useState } from "react";
import { AddElementPropertiesModel } from "../../models";

const AddElement: React.FC<AddElementPropertiesModel> = (
  props: AddElementPropertiesModel
): ReactElement => {
  const [element, setElement] = useState("");
  const onFormSubmit = (event: React.FormEvent): void => {
    event.preventDefault();
    props.addElement(element);
  };

  const onInputValueChange = (event: ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();
    setElement(event.target.value);
  };

  return (
    <form onSubmit={onFormSubmit}>
      <div className="form-group">
        <label htmlFor="shopping-list-add-element">Add:</label>
        <input
          id="shopping-list-add-element"
          className="form-control"
          type="text"
          value={element}
          onChange={onInputValueChange}
        />
      </div>
      <button type="submit" className="btn btn-primary">
        Save
      </button>
    </form>
  );
};

export default AddElement;
