import { useDispatch } from "react-redux";
import { register } from "../../redux/auth/auth-operations";
import css from './RegisterForm.module.css'

export const RegisterForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      register({
        name: form.elements.name.value,
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  return (
    <form className={css.form} onSubmit={handleSubmit} autoComplete="off">
      <label className={css.label}>
        <input className={css.input} type="text" name="name" placeholder="Enter your name" />
      </label>
      <label className={css.label}>

        <input className={css.input} type="email" name="email" placeholder="Enter your email" />
      </label>
      <label className={css.label}>

        <input className={css.input} type="password" name="password" placeholder="Enter your password" />
      </label>
      <button className={css.button} type="submit">Register</button>
    </form>
  );
};
