import { applyMiddleware, createStore } from 'redux';
import { cityDataReducer } from './reducers';
import thunk from 'redux-thunk';

export const store = createStore(cityDataReducer, applyMiddleware(thunk));
