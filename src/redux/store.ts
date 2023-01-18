import {
  TypedUseSelectorHook,
  useDispatch as useReduxDispatch,
  useSelector as useReduxSelector,
} from "react-redux";
import {
  applyMiddleware,
  combineReducers,
  createStore,
  compose,
  Action,
} from "redux";
import thunkMiddleWare, { ThunkAction } from "redux-thunk";
import bookReducer from "./bookReducer";
let rootReducer = combineReducers({
  bookReducer: bookReducer,
});

type RootReducerType = typeof rootReducer;

export type RootState = ReturnType<typeof rootReducer>;

export type AppStateType = ReturnType<RootReducerType>;

export type InferActionsTypes<T> = T extends {
  [key: string]: (...args: any[]) => infer U;
}
  ? U
  : never;

export type BaseThunkType<A extends Action, R = Promise<void>> = ThunkAction<
  R,
  AppStateType,
  unknown,
  A
>;

//  const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

//  const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunkMiddleWare)));

// const store = createStore(rootReducer, undefined, composedEnhancers)

export const useSelector: TypedUseSelectorHook<RootState> = useReduxSelector;

export type AppDispatch = typeof store.dispatch;
export const useDispatch = () => useReduxDispatch<AppDispatch>();

// @ts-ignore
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunkMiddleWare))
);

//  window.__store__ = store;
export default store;
