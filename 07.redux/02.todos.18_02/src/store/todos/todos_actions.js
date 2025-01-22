import { ADD_TODO, TOGGLE_TODO, DELETE_TODO, UPDATE_TODO } from './todos_const';

export const addTodo = (text) => ({ type: ADD_TODO, text });
export const toggleTodo = (id) => ({ type: TOGGLE_TODO, id });
export const deleteTodo = (id) => ({ type: DELETE_TODO, id });
export const updateTodo = (id, text) => ({ type: UPDATE_TODO, id, text });
