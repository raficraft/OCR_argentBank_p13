import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { userAuth } from "./reducers";
import { composeWithDevTools } from "redux-devtools-extension";

const store = createStore(
  userAuth,
  composeWithDevTools(applyMiddleware(thunk))
);

console.log(store);

export default store;
