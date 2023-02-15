import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Provider } from 'react-redux';

import store from './app/store';
import App from './components/App';
import './index.css';

const theme = createTheme({});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    /* eslint-disable */
    <Provider store={store}>
        <ThemeProvider theme={theme}>
            <BrowserRouter>
                {/* <React.StrictMode> */}
                <App />
                {/* </React.StrictMode> */}
            </BrowserRouter>
        </ThemeProvider>,
    </Provider>
);
