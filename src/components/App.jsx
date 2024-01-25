
import { useDispatch} from "react-redux";
import { useEffect,lazy } from "react";
import { useAuth } from "hook/useAuth";
import { refreshUser } from "../redux/auth/auth-operations";
import { Route, Routes } from "react-router-dom";
import { Layout } from "./Layout";
import { RestrictedRoute } from "./RestrictedRoute";
import { PrivateRoute } from "./PrivatRoute";

const Home = lazy(() => import('../pages/HomePage'));
const Register = lazy(() => import('../pages/RegisterPage'));
const Login = lazy(() => import('../pages/LoginPage'));
const Contacts = lazy(() => import('../pages/ContactsPage'));

export const App = () => {

  const dispatch = useDispatch();
   const { isRefreshing } = useAuth();

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return   isRefreshing ? (
    <b>Refreshining user...</b>
  ) : (
      <Routes>
      <Route path="/" element={<Layout/>}>
        <Route index element={<Home />}/>
          <Route path="/register" element={<RestrictedRoute redirectTo="/register" component={<Register/>} />} />
          <Route path="/login" element={<RestrictedRoute redirectTo="/contacts" component={<Login />} />} />
          <Route path="/contacts" element={<PrivateRoute redirectTo="/contacts" component={<Contacts />} />} />
          <Route path="/logout" element={<RestrictedRoute redirectTo="/" component={<Home />} />} />
        </Route>
        <Route path="*" element={<h1>Error</h1>} />
    </Routes>
  );



};
