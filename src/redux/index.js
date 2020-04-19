import { createStore } from "redux";
import reducer from "./reducers/rate";
const store = createStore(reducer);

export default store;
