import React from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { logOutUserThunk, loginUserThunk } from '../store/slices/userInfo.slice';
import './styles/Login.css';

const Login = () => {
  const { token, user } = useSelector((state) => state.userInfo);
  const { register, handleSubmit } = useForm();
  const dispatch = useDispatch();

  const submit = (data) => {
    dispatch(loginUserThunk(data));
  };

  const handleLogOut = () => {
    dispatch(logOutUserThunk());
  };

  return (
    <main className="login">
      {token ? (
        <section className="login__logged">
          <i className="login__logged-icon bx bx-user-circle"></i>
          <h3 className="login__logged-name">{`${user.name}`}</h3>
          <button className="login__logged-btn" onClick={handleLogOut}>
            Log out
          </button>
        </section>
      ) : (
        <div className="contenedor-login">
          <div className="contenedor-texto">
            <div className="contenedor-form">
              <div className="logo_login">
                <img src="/src/img/Icono Redes Sociales - IYF.jpg" alt="logo" />
              </div>
              <h1 className="titulo">¡Bienvenido a IM YOUR FAN STORE!</h1>
              <p className="descripcion">¡Sumérgete en el mundo del K-pop como nunca antes!</p>
              <form className="login__form" onSubmit={handleSubmit(submit)}>
                <div className="login__field">
                  <label className="login__label">Correo electrónico</label>
                  <input className="login__input" type="email" {...register('email')} />
                </div>
                <div className="login__field">
                  <label className="login__label">Contraseña</label>
                  <input className="login__input" type="password" {...register('password')} />
                </div>
                <button className="btn" type="submit">Iniciar Sesión</button>
                <p className="login__text-footer">¿No tienes cuenta? <span>Regístrate</span></p>
              </form>
            </div>
          </div>
        </div>
      )}
    </main>
  );
};

export default Login;
