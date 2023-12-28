import { FC }         from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { useTheme }   from 'app/providers/ThemeProvider';
import cls            from './ThemeSwitcher.module.scss';

interface ThemeSwitcherProps {
    className?: string;
}

export const ThemeSwitcher: FC<ThemeSwitcherProps> = ({ className }) => {
    const { toggleTheme } = useTheme();

    return (
        <label className={classNames(cls.toggle_switch, {}, [className])}>
            <input type="checkbox" />
            <span className={cls.switch} onClick={toggleTheme} />
        </label>
    );
};
