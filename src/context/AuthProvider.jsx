import React, { createContext, useEffect, useState } from 'react';
import { getLocalStorage, setLocalStorage } from '../utils/LocalStorage';

export const AuthContext = createContext();

function AuthProvider({ children }) {
  // setLocalStorage();
  
  const [userData, setUserData] = useState({ employees: [], admin: [] });

  useEffect(() => {
    const storedData = getLocalStorage();
    if (storedData) {
      setUserData(storedData);
    }
  }, []);

  return (
    <AuthContext.Provider value={[userData, setUserData]}>
      {children}
    </AuthContext.Provider>
  );
}

export default AuthProvider;
