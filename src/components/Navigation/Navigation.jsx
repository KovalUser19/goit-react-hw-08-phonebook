import { useAuth } from "hook/useAuth";
import { NavLink } from "react-router-dom";
import css from './Navigation.module.css'

export const Navigation = () => {
  const { isLoggedIn } = useAuth();

  return (
    <nav className={css.nav}>
      <NavLink className={css.linkNav} to="/">
        Home
      </NavLink>
      {isLoggedIn && (
        <NavLink className={css.link} to="/contacts"></NavLink>
      )}
    </nav>
  );
};