import { Suspense, useState } from 'react';
import { Route, Routes, Link } from 'react-router-dom';

import './styles/index.scss';

import { MainPageAsync } from './pages/MainPage/MainPage.async';
import { AboutPageAsync } from './pages/AboutPage/AboutPage.async';

export enum Theme {
    LIGHT = 'light',
    DARK = 'dark',
};

export const App = () => {
    const [theme, setTheme] = useState<Theme>(Theme.LIGHT);

    const toggleTheme = () => {
        setTheme(theme === Theme.DARK ? Theme.LIGHT : Theme.DARK);
    };

    return (
        <div className={`app ${theme}`}>
            <button onClick={toggleTheme}>change theme</button>
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
