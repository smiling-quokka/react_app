import { Suspense }      from 'react';
import { Route, Routes } from 'react-router-dom';

import MainPage          from 'pages/MainPage';
import AboutPage         from 'pages/AboutPage';
import { classNames }    from 'shared/lib/classNames/classNames';
import { useTheme }      from 'app/providers/ThemeProvider/lib/useTheme';
import { Navbar }        from 'widgets/Navbar/ui/Navbar';

import './styles/index.scss';

export const App = () => {
    const { theme, toggleTheme } = useTheme();

    return (
        <div className={classNames('app', {}, [theme, 'cls2', 'cls3'])}>
            <Navbar />
            <Suspense fallback={<div>Loading...</div>}>
            <button onClick={toggleTheme}>TOGGLE</button>
                <Routes>
                    <Route path="/" element={<MainPage />} />
                    <Route path="about" element={<AboutPage />} />
                </Routes>
            </Suspense>
        </div>
    );
};
