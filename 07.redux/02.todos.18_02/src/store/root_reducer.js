import { todos } from './todos/todos_reducer';
import { combineReducers } from 'redux';

export const rootReducer = combineReducers({ todos });
