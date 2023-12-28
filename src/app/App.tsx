import { classNames } from 'shared/lib/classNames/classNames';
import { useTheme }   from 'app/providers/ThemeProvider/lib/useTheme';
import Navbar         from 'widgets/Navbar/index';
import Sidebar        from 'widgets/Sidebar/index';
import { Router }     from "router";

import './styles/index.scss';

export const App = () => {
    const { theme } = useTheme();

    return (
        <div className={classNames('app', {}, [theme, 'cls2', 'cls3'])}>
            <Navbar />
            <Sidebar />
            <Router />
        </div>
    );
};
