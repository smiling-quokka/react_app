import { Suspense } from 'react';
import { Route, Routes, Link } from 'react-router-dom';

import './styles/index.scss';

import { MainPageAsync } from './pages/MainPage/MainPage.async';
import { AboutPageAsync } from './pages/AboutPage/AboutPage.async';
import { useTheme } from './styles/theme/useTheme';

export const App = () => {
    const { theme, toggleTheme } = useTheme();

    return (
        <div className={`app ${theme}`}>
            <button onClick={toggleTheme}>TOGGLE</button>
            <Link to={'/'}>home</Link>
            <Link to={'/about'}>about</Link>
            <Suspense fallback={<div>Loading...</div>}>
                <Routes>
                    <Route path="/" element={<MainPageAsync />} />
                    <Route path="about" element={<AboutPageAsync />} />
                </Routes>
            </Suspense>
        </div>
    );
};
