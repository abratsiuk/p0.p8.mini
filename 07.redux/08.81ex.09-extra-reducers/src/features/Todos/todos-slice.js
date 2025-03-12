import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

import { resetToDefault } from '../Reset/reset-action';

export const loadTodos = createAsyncThunk('@@todos/load-todos', async () => {
    const res = await fetch('http://localhost:3001/todos');
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
    async (id, { getState }) => {
        const todo = getState().todos.entities.find((todo) => todo.id === id);
        const res = await fetch('http://localhost:3001/todos/' + id, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                completed: !todo.completed,
            }),
        });
        const data = await res.json();

        return data;
    }
);
export const removeTodo = createAsyncThunk(
    '@@todos/remove-todo',
    async (id) => {
        const res = await fetch('http://localhost:3001/todos/' + id, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
            },
        });
        await res.json();

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
            .addCase(loadTodos.pending, (state, action) => {
                state.loading = 'loading';
                state.error = null;
            })
            .addCase(loadTodos.rejected, (state) => {
                state.loading = 'idle';
                state.error = 'Something went wrong!';
            })
            .addCase(loadTodos.fulfilled, (state, action) => {
                state.entities = action.payload;
            })
            .addCase(createTodo.fulfilled, (state, action) => {
                state.entities.push(action.payload);
            })
            .addCase(toggleTodo.fulfilled, (state, action) => {
                const id = action.payload.id;
                const index = state.entities.findIndex(
                    (todo) => todo.id === id
                );
                state.entities[index] = action.payload;
            })
            .addCase(removeTodo.fulfilled, (state, action) => {
                const id = action.payload;
                state.entities = state.entities.filter(
                    (todo) => todo.id !== id
                );
            });
    },
});

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
