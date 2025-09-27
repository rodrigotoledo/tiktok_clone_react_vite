import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import AuthenticatedStack from './authentication/AuthenticatedStack';
import UnauthenticatedStack from './authentication/UnauthenticatedStack';


const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(null);

  useEffect(() => {
    const checkAuthentication = async () => {
      try {
        const authToken = localStorage.getItem('authToken');
        setIsAuthenticated(!!authToken);
      } catch (error) {
        console.log('Error:', error);
        setIsAuthenticated(false);
      }
    };

    checkAuthentication();
  }, []);

  if (isAuthenticated === null) {
    return null;
  }

  return (
    <>
      {isAuthenticated ? (
        <AuthenticatedStack setIsAuthenticated={setIsAuthenticated} />
      ) : (
        <UnauthenticatedStack setIsAuthenticated={setIsAuthenticated} />
      )}
    </>
  );
};

export default App;
