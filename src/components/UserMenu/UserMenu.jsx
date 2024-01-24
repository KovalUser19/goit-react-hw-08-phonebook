import { useDispatch } from "react-redux";
import { logout } from "../../redux/auth/auth-operations";
import css from './UserMenu.module.css'
import { useAuth } from "../../hook/useAuth";

export const UserMenu = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();
  console.log(user);
  return (
    <div className={css.wrapper}>
      <p className={css.username}>Welcome, {user.name}</p>
      <button className={css.buttonUserMenu} type="button" onClick={() => dispatch(logout())}>
        LogOut
      </button>
    </div>
  );
};