import { createStore } from 'redux';
import { devToolsEnhancer } from '@redux-devtools/extension';
import { rootReducer } from './root_reducer';

export const configureStore = () => {
    return createStore(rootReducer, devToolsEnhancer());
};
