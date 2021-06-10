import rootReducer from './reducer/index';
import { createStore } from 'redux';
import ApplyMiddleware from "./middleware/thunk_middleware";
import { composeWithDevTools } from "redux-devtools-extension";

const store = createStore(
    rootReducer,
    composeWithDevTools(ApplyMiddleware)
    );

export default store;