import { createStore, applyMiddleware } from 'redux';
import { configureStore } from '@reduxjs/toolkit'
import { thunk } from "redux-thunk";
import rootReducer from '../RootReducer/rootReducer';


const store = configureStore(rootReducer, applyMiddleware(thunk));

export default store;