import { combineReducers, configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "@redux-saga/core";
import {createWrapper, HYDRATE} from 'next-redux-wrapper';
import rootSaga from "./rootSaga";
import authReducer from "./slice/authSlice";
import musicReducer from './slice/musicSlice'

export const makeStore = () => {
  
  const sagaMiddleware = createSagaMiddleware();

  const combinedReducer = combineReducers({
    auth: authReducer,
    music: musicReducer
  })

   const reducer = (state : any, action : any) => {
      if (action.type === HYDRATE) {
        const nextState = {
          ...state, // use previous state
          ...action.payload, // apply delta from hydration
        };
        return nextState;
      } else {
        return combinedReducer(state, action);
      }
    };

  const store = configureStore({
    reducer: reducer,
    middleware: [sagaMiddleware]
  })
  sagaMiddleware.run(rootSaga);
  return store;
};

type Store = ReturnType<typeof makeStore>;

export type AppDispatch = Store['dispatch'];
export type RootState = ReturnType<Store['getState']>;

export const wrapper = createWrapper(makeStore);







