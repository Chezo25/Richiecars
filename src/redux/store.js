import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import carReducer from './reducers/carReducers';
import { alertReducer } from './reducers/alertReducer';

const rootReducer = combineReducers({ carReducer, alertReducer })


const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;