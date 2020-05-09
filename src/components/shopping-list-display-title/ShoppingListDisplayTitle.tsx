import React from "react";

import { ShoppingListDisplayTitlePropertiesModel } from "../../models/ShoppingListDisplayTitlePropertiesModel";

const ShoppingListDisplayTitle: React.FC<ShoppingListDisplayTitlePropertiesModel> = (
  props: ShoppingListDisplayTitlePropertiesModel
): React.ReactElement => (
  <div className="row">
    <div className="col">
      <span className="h2 pr-2">{props.title}</span>
      <i className="material-icons" onClick={props.showEditTitle}>
        autorenew
      </i>
    </div>
  </div>
);

export default ShoppingListDisplayTitle;
