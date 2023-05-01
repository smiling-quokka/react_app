import { createRoot }    from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { App }           from './app/App';
import { ThemeProvider } from './app/providers/ThemeProvider';

createRoot(document.getElementById('root')).render(
    <BrowserRouter>
        <ThemeProvider>
            <App />
        </ThemeProvider>
    </BrowserRouter>,
);
