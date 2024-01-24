import {createStore, applyMiddleware} from 'redux';
import { rootReducer } from './root-reduce';
import logger from 'redux-logger';



export const store = createStore(rootReducer, applyMiddleware(logger));

// applyMiddleware intercepta tudo o que acontece no Redux, é um interceptador. 

