import { applyMiddleware, createStore, Store } from "redux";
import { rootReducer } from "./reducers";
import { createEpicMiddleware } from "redux-observable";
import { rootEpic } from "./epics";
import { composeWithDevTools } from "redux-devtools-extension";

const epicMiddleware = createEpicMiddleware();

// remove devTool from PROD build
const configureStore = (): Store => {
  const store = createStore(
    rootReducer,
    composeWithDevTools(applyMiddleware(epicMiddleware))
  );
  epicMiddleware.run(rootEpic);
  return store;
};

export const appStore: Store = configureStore();
