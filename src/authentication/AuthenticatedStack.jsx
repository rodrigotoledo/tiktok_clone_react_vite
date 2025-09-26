import React from 'react';
import { Routes, Route } from 'react-router-dom';
import SignOut from '../pages/SignOut';
import Posts from '../pages/Posts';

const AuthenticatedStack = ({ setIsAuthenticated }) => (
  <Routes>
    <Route path="/" element={<Posts />} />
    <Route path="/posts" element={<Posts />} />
    <Route path="/sign-out" element={<SignOut setIsAuthenticated={setIsAuthenticated} />} />
  </Routes>
);

export default AuthenticatedStack;
