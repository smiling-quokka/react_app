import { Suspense } from 'react';
import { Route, Routes, Link } from 'react-router-dom';

import './styles/index.scss';

import { MainPageAsync } from './pages/MainPage/MainPage.async';
import { AboutPageAsync } from './pages/AboutPage/AboutPage.async';
import { useTheme } from './styles/theme/useTheme';
import { classNames } from './helpers/classNames/classNames';

export const App = () => {
    const { theme, toggleTheme } = useTheme();

    return (
        <div className={classNames('app', {}, [theme, 'cls2', 'cls3'])}>
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
