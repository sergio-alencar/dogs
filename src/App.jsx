import React from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Home from './Components/Home';
import Login from './Components/Login/Login';
import { UserStorage } from './UserContext';
import User from './Components/User/User';
import ProtectedRoute from './Components/Helper/ProtectedRoute';
import Photo from './Components/Photo/Photo';
import UserProfile from './Components/User/UserProfile';
import NotFound from './Components/NotFound';

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <UserStorage>
          <Header />
          <main className='AppBody'>
            <Routes>
              <Route path='dogs' end element={<Home />} />
              <Route path='dogs/login/*' element={<Login />} />
              <Route path='dogs/foto/:id' element={<Photo />} />
              <Route path='dogs/perfil/:user' element={<UserProfile />} />
              <Route path='dogs/*' element={<NotFound />} />
              <Route
                path='dogs/conta/*'
                element={
                  <ProtectedRoute>
                    <User />
                  </ProtectedRoute>
                }
              />
            </Routes>
          </main>
          <Footer />
        </UserStorage>
      </BrowserRouter>
    </div>
  );
}

export default App;
