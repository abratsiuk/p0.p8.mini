import './App.css';
import { Todos } from './components/Todos';
import { NewTodo } from './components/NewTodo';
import { Filter } from './components/Filter';

export const App = () => {
    return (
        <div className="App">
            <h1>todos</h1>
            <NewTodo />
            <Filter />
            <Todos />
        </div>
    );
};
