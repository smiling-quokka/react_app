import { Suspense } from 'react';
import { Route, Routes, Link } from 'react-router-dom';
import './index.scss';
import { MainPageAsync } from './pages/MainPage/MainPage.async';
import { AboutPageAsync } from './pages/AboutPage/AboutPage.async';

export const App = () => {
    return (
        <div className="app">
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
