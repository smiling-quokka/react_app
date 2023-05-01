import { Suspense }            from 'react';
import { Route, Routes, Link } from 'react-router-dom';

import MainPage                from 'pages/MainPage';
import AboutPage               from 'pages/AboutPage';
import { classNames }          from 'shared/lib/classNames/classNames';
import { useTheme }            from 'app/providers/ThemeProvider/lib/useTheme';

import './styles/index.scss';

export const App = () => {
    const { theme, toggleTheme } = useTheme();

    return (
        <div className={classNames('app', {}, [theme, 'cls2', 'cls3'])}>
            <button onClick={toggleTheme}>TOGGLE</button>
            <Link to={'/'}>home</Link>
            <Link to={'/about'}>about</Link>
            <Suspense fallback={<div>Loading...</div>}>
                <Routes>
                    <Route path="/" element={<MainPage />} />
                    <Route path="about" element={<AboutPage />} />
                </Routes>
            </Suspense>
        </div>
    );
};
