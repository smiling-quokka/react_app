import { Route, Routes } from 'react-router-dom';
import { FC, Suspense }  from 'react';
import { Loader }        from 'shared/ui/Loader/Loader';
import routes            from './lib/routes';

export const Router: FC = () => (
    <Suspense fallback={<Loader />}>
        <Routes>
            {routes.map((route, i) => (
                <Route path={route.path} element={<route.element />} key={i} />
            ))}
        </Routes>
    </Suspense>
);
