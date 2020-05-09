import React from "react";
import {
  ShoppingListTitleContainer,
  Header,
  AddElementContainer,
  ShoppingListElementsContainer,
} from "./components";

export const App = () => {
  return (
    <div>
      <header>
        <Header />
      </header>
      <div className="container-fluid">
        <main>
          <div className="row">
            <h1 className="col-12 display-1 text-center mb-5">Shopping list</h1>
            <div className="col">
              <ShoppingListTitleContainer />
            </div>
            <div className="col">
              <AddElementContainer />
            </div>
          </div>
          <div className="row">
            <div className="col">
              <ShoppingListElementsContainer />
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default App;
