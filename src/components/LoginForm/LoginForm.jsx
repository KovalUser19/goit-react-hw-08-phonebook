import { useDispatch } from "react-redux";
import { login } from "../../redux/auth/auth-operations";
import css from './LoginForm.module.css'

export const LoginForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      login({
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  return (
    <form className={css.form} onSubmit={handleSubmit} autoComplete="off">
      <label className={css.label}>

        <input className={css.input} type="email" name="email" placeholder="Enter your email"/>
      </label>
      <label className={css.label}>

        <input className={css.input} type="password" name="password" placeholder="Enter your password" />
      </label>
      <button className={css.button} type="submit">Log In</button>
    </form>
  );
};