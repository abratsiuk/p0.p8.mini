import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import { Root } from './Root';

import { configureStore } from './store';

const store = configureStore();

createRoot(document.getElementById('root')).render(
    <StrictMode>
        <Root store={store} />
    </StrictMode>
);
