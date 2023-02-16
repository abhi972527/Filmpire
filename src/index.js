import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';

import ToggleColorModeProvider from './utils/ToggleColorMode';
import store from './app/store';
import App from './components/App';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    /* eslint-disable */
    <Provider store={store}>
        <ToggleColorModeProvider>
            <BrowserRouter>
                {/* <React.StrictMode> */}
                <App />
                {/* </React.StrictMode> */}
            </BrowserRouter>
        </ToggleColorModeProvider>,
    </Provider>
);
