import React from 'react';
import { Routes, Route } from 'react-router-dom';
import SignOut from '../pages/SignOut';
import Posts from '../pages/Posts';
import NotFound from '../pages/NotFound';
import AuthenticatedLayout from '../layouts/AuthenticatedLayout';

const AuthenticatedStack = ({ setIsAuthenticated }) => (
  <Routes>
    <Route element={<AuthenticatedLayout />}>
      <Route path="/" element={<Posts />} />
      <Route path="/posts" element={<Posts />} />
      <Route path="/sign-out" element={<SignOut setIsAuthenticated={setIsAuthenticated} />} />
      <Route path="*" element={<NotFound />} />
    </Route>
  </Routes>
);

export default AuthenticatedStack;
