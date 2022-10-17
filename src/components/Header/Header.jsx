import { NavLink } from 'react-router-dom';
import style from './Header.module.css';

export default function Header() {
    return (
        <nav className={style.header}>
        <NavLink to="/" className={style.link}>
            Home
        </NavLink>

        <NavLink to="/movies" className={style.link}>
            Movies
        </NavLink>
    </nav>
    )
};