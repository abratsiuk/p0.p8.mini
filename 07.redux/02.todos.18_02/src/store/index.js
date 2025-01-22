import { createStore } from 'redux';
import { devToolsEnhancer } from '@redux-devtools/extension';
import { todos } from './todos/todos_reducer';

export const store = createStore(todos, devToolsEnhancer());
