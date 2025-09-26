import React from 'react';
import { Routes, Route } from 'react-router-dom';
import SignIn from '../pages/SignIn';
import SignUp from '../pages/SignUp';
import ForgotPassword from '../pages/ForgotPassword';


const UnauthenticatedStack = ({ setIsAuthenticated }) => (
  <Routes>
    <Route path="/" element={<SignIn setIsAuthenticated={setIsAuthenticated} />} />
    <Route path="/sign-up" element={<SignUp setIsAuthenticated={setIsAuthenticated} />} />
    <Route path="/forgot-password" element={<ForgotPassword setIsAuthenticated={setIsAuthenticated} />} />
  </Routes>
);

export default UnauthenticatedStack;