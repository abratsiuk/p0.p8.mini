import { createStore } from 'redux';
import { devToolsEnhancer } from '@redux-devtools/extension';
import { rootReducer } from './root_reducer';

export const store = createStore(rootReducer, devToolsEnhancer());
