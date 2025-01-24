import { createStore } from 'redux';
import { devToolsEnhancer } from '@redux-devtools/extension';
import { rootReducer } from './root_reducer';
import { loadData, saveData } from './localstorage';
import { all } from './filters/filters_const';

export const configureStore = () => {
    const persistedTodos = loadData();
    const store = createStore(
        rootReducer,
        { todos: persistedTodos, filters: all },
        devToolsEnhancer()
    );

    store.subscribe(() => {
        saveData(store.getState()?.todos);
    });

    return store;
};
