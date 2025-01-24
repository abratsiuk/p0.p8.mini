import { createStore } from 'redux';
import { devToolsEnhancer } from '@redux-devtools/extension';
import { rootReducer } from './root_reducer';
import { loadData, saveData } from './localstorage';
import { all } from './filters_const';
import throttle from 'lodash/throttle';

export const configureStore = () => {
    const persistedTodos = loadData();
    const store = createStore(
        rootReducer,
        { todos: persistedTodos, filters: all },
        devToolsEnhancer()
    );

    store.subscribe(
        throttle(() => {
            saveData(store.getState()?.todos);
        }, 1000)
    );

    return store;
};
