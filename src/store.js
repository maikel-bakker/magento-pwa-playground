import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import promise from 'redux-promise-middleware';
import { composeWithDevTools } from 'redux-devtools-extension';
import { createLogger } from 'redux-logger';

import reducer from './reducers';

export default createStore(reducer, composeWithDevTools(
    applyMiddleware(promise(), thunk, createLogger())
));