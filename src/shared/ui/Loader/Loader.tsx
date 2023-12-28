import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Loader.module.scss';
import { FC } from "react";

export const Loader: FC = () => <div className={classNames(cls.loader, {}, [])}>Loading...</div>;
