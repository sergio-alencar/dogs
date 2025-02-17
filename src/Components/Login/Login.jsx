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
          <Route path='dogs' element={<LoginForm />} />
          <Route path='dogs/criar' element={<LoginCreate />} />
          <Route path='dogs/perdeu' element={<LoginPasswordLost />} />
          <Route path='dogs/resetar' element={<LoginPasswordReset />} />
          {/* <Route path='dogs/*' element={<NotFound />} /> */}
        </Routes>
      </div>
    </section>
  );
};

export default Login;
