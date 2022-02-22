import { applyMiddleware, createStore } from "redux";
import { reducer } from "./reducers/reducer";
import { composeWithDevTools } from "redux-devtools-extension";
import thunkMiddleware from "redux-thunk";

const configureStore = () => {
    const middlewares = [thunkMiddleware];
    const middlewareEnhancer = applyMiddleware(...middlewares);

    const enhancers = [middlewareEnhancer];
    const composedEnhancers = composeWithDevTools(...enhancers);
    const store = createStore(reducer, composedEnhancers);
    return store;
};

export { configureStore };