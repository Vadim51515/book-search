export const a = 1
// import { applyMiddleware, combineReducers, createStore, compose, Action } from 'redux';
// import profileReducer from './Profile_Reducer';
// import dialogsReducer from './Dialogs_Reducer';
// import friendsReducer from './Friends_Reducer';
// import usersReducer from './Users_Reducer';
// import authReducer from './Auth_Reducer';
// import  thunkMiddleWare, { ThunkAction } from 'redux-thunk'
// import { reducer as formReducer } from 'redux-form'
// import appReducer from './App-reducer';
// let rootReducer = combineReducers({
//     profilePage: profileReducer,
//     dialogsPage:dialogsReducer,
//     friends:friendsReducer,
//     usersPage: usersReducer,
//     auth:authReducer,
//     app:appReducer,
//     form:formReducer,
// });

// type RootReducerType = typeof rootReducer
// export type AppStateType = ReturnType<RootReducerType> 

// export type InferActionsTypes<T> = T extends  {[key:string]: (...args: any[]) => infer U}? U : never

// export type BaseThunkType<A extends Action, R = Promise<void>> = ThunkAction<R, AppStateType, unknown, A>

// //  const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// //  const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunkMiddleWare)));

// const store = createStore(rootReducer, undefined, composedEnhancers)

// //  window.__store__ = store;
// export default store;







//