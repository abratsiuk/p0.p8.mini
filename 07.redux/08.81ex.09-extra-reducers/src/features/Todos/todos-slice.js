import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

import { resetToDefault } from '../Reset/reset-action';

export const getTodos = createAsyncThunk('@@todos/get-todos', async (title) => {
    const res = await fetch('http://localhost:3001/todos', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        },
    });
    const data = await res.json();

    return data;
});

export const createTodo = createAsyncThunk(
    '@@todos/create-todo',
    async (title) => {
        const res = await fetch('http://localhost:3001/todos', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ title, completed: false }),
        });
        const data = await res.json();

        return data;
    }
);

export const toggleTodo = createAsyncThunk(
    '@@todos/toggle-todo',
    async ({ id, completed }) => {
        const res = await fetch(`http://localhost:3001/todos/${id}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ completed }),
        });
        const data = await res.json();

        return data;
    }
);

export const removeTodo = createAsyncThunk(
    '@@todos/delete-todo',
    async (id) => {
        await fetch(`http://localhost:3001/todos/${id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
            },
        });
        return id;
    }
);

const todoSlice = createSlice({
    name: '@@todos',
    initialState: {
        entities: [],
        loading: 'idle', // 'loading',
        error: null,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(resetToDefault, () => {
                return [];
            })

            .addCase(getTodos.pending, (state, action) => {
                state.loading = 'loading';
                state.error = null;
            })
            .addCase(getTodos.rejected, (state) => {
                state.loading = 'idle';
                state.error = 'Something went wrong in getTodos!';
            })
            .addCase(getTodos.fulfilled, (state, action) => {
                return {
                    entities: action.payload,
                    loading: 'idle',
                    error: null,
                };
            })

            .addCase(createTodo.pending, (state, action) => {
                state.loading = 'loading';
                state.error = null;
            })
            .addCase(createTodo.rejected, (state) => {
                state.loading = 'idle';
                state.error = 'Something went wrong!';
            })
            .addCase(createTodo.fulfilled, (state, action) => {
                state.entities.push(action.payload);
            })

            .addCase(toggleTodo.pending, (state, action) => {
                state.loading = 'loading';
                state.error = null;
            })
            .addCase(toggleTodo.rejected, (state) => {
                state.loading = 'idle';
                state.error = 'Something went wrong!';
            })
            .addCase(toggleTodo.fulfilled, (state, action) => {
                const id = action.payload.id;
                const todo = state.entities.find((todo) => todo.id === id);
                todo.completed = action.payload.completed;
            })

            .addCase(removeTodo.pending, (state, action) => {
                state.loading = 'loading';
                state.error = null;
            })
            .addCase(removeTodo.rejected, (state) => {
                state.loading = 'idle';
                state.error = 'Something went wrong!';
            })
            .addCase(removeTodo.fulfilled, (state, action) => {
                const id = action.payload;
                return {
                    entities: state.entities.filter((todo) => todo.id !== id),
                    loading: 'idle',
                    error: null,
                };
            });
    },
});
export const { addTodo } = todoSlice.actions;

export const todoReducer = todoSlice.reducer;

export const selectVisibleTodos = (state, filter) => {
    switch (filter) {
        case 'all': {
            return state.todos.entities;
        }
        case 'active': {
            return state.todos.entities.filter((todo) => !todo.completed);
        }
        case 'completed': {
            return state.todos.entities.filter((todo) => todo.completed);
        }
        default: {
            return state.todos;
        }
    }
};
