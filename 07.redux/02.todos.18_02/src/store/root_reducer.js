import { todos } from './todos/todos_reducer';
import { filters } from './filters/filters_reducer';
import { combineReducers } from 'redux';

export const rootReducer = combineReducers({ todos, filters });
