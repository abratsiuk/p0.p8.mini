import './App.css';
import { Provider } from 'react-redux';
import { store } from './store';
import { NewTodo } from './NewTodo';
import { Todos } from './Todos';

export default function App() {
    return (
        <Provider store={store}>
            <div className="App">
                <NewTodo />
                <Todos />
            </div>
        </Provider>
    );
}
