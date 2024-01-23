import { AuthNav } from "components/AuthNav/AuthNav";
import { UserMenu } from "components/UserMenu/UserMenu";

import css from './Header.module.css'
import { Navigation } from "components/Navigation/Navigation";
import { useAuth } from "hook/useAuth";

const Header = () => {
   const { isLoggedIn } = useAuth();
  return (
    <header className={css.header}>
      <Navigation/>
      {isLoggedIn ?<UserMenu /> : <AuthNav/> }
    </header>
  )
}
export default Header;