import { FormEvent, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { AppRoute } from '../../const';
import { saveUserName } from '../../services/login';
import { loginAction } from '../../store/api-actions';
import Header from '../header/header';


function Login() {

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [userLogin, setUserLogin] = useState({
    login: '',
    password: '',
  });

  const handleSubmit = (e: FormEvent ) => {
    e.preventDefault();
    dispatch(loginAction(userLogin));
    saveUserName(userLogin.login);
    navigate(AppRoute.Root);
  };


  return (
    <>
      <Header />
      <main className="page__main page__main--login">
        <div className="page__login-container container">
          <section className="login">
            <h1 className="login__title">Sign in</h1>
            <form className="login__form form" action="#" method="post">
              <div className="login__input-wrapper form__input-wrapper">
                <label className="visually-hidden">E-mail</label>
                <input value={userLogin.login} onChange={(e) => setUserLogin({...userLogin, login: e.target.value})} className="login__input form__input" type="email" name="email" placeholder="Email" required />
              </div>
              <div className="login__input-wrapper form__input-wrapper">
                <label className="visually-hidden">Password</label>
                <input value={userLogin.password} onChange={(e) => setUserLogin({...userLogin, password: e.target.value})} className="login__input form__input" type="password" name="password" placeholder="Password" required />
              </div>
              <button onClick={handleSubmit}  className="login__submit form__submit button" type="submit">Sign in</button>
            </form>
          </section>
          <section className="locations locations--login locations--current">
            <div className="locations__item">
              <a className="locations__item-link" href="/#">
                <span>Amsterdam</span>
              </a>
            </div>
          </section>
        </div>
      </main>
    </>
  );
}


export default Login;
