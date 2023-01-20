import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import App from './components/App';

const theme = createTheme({});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    /* eslint-disable */
    <ThemeProvider theme={theme}>
        <BrowserRouter>
            <React.StrictMode>
                <App />
            </React.StrictMode>
        </BrowserRouter>
    </ThemeProvider>,
);
