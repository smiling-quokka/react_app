import { useCallback, useState } from 'react';
import cls from './Sidebar.module.scss';
import { classNames } from 'shared/lib/classNames/classNames';
import ArrowLeft from 'shared/assets/icons/arrow-left.svg';
import ArrowRight from 'shared/assets/icons/arrow-right.svg';

interface SidebarProps {
    className?: string;
}

export const Sidebar = ({ className }: SidebarProps) => {
    const [collapsed, setCollapsed] = useState(true);

    const onToggle = useCallback(() => {
        setCollapsed((prev) => !prev);
    }, []);

    return (
        <div className={classNames(cls.Sidebar, { [cls.collapsed]: collapsed }, ['flex', 'flex--column', className])}>
            <button onClick={onToggle} className={cls.switcher}>
                {collapsed ? (
                    <ArrowRight className={`${cls.hideIcon} open-icon`} />
                ) : (
                    <ArrowLeft className={`${cls.showIcon} open-icon`} />
                )}
            </button>
        </div>
    );
};
