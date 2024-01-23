import { useDispatch } from "react-redux";
import { logout } from "../../redux/auth/auth-operations";
import css from './UserMenu.module.css'
import { useAuth } from "hook/useAuth";

export const UserMenu = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();

  return (
    <div className={css.wrapper}>
      <p className={css.username}>Welcome, {user.name}</p>
      <button type="button" onClick={() => dispatch(logout())}>
        LogOut
      </button>
    </div>
  );
};