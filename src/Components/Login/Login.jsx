import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import LoginForm from './LoginForm';
import LoginCreate from './LoginCreate';
import LoginPasswordLost from './LoginPasswordLost';
import LoginPasswordReset from './LoginPasswordReset';
import UserContext from '../../UserContext';
import styles from './Login.module.css';
import NotFound from '../NotFound';

const Login = () => {
  const { login } = React.useContext(UserContext);

  if (login === true) return <Navigate to='/conta' />;
  return (
    <section className={styles.login}>
      <div className={styles.forms}>
        <Routes>
          <Route path='login' element={<LoginForm />} />
          <Route path='login/criar' element={<LoginCreate />} />
          <Route path='login/perdeu' element={<LoginPasswordLost />} />
          <Route path='login/resetar' element={<LoginPasswordReset />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </div>
    </section>
  );
};

export default Login;
