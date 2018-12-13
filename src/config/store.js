import {mainReducer } from './reducer';
import { createStore } from 'redux';
import thunk from 'redux-thunk';
import {compose , applyMiddleware} from 'redux';

const store = createStore(mainReducer,compose(applyMiddleware(thunk), window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()));

export default store;