import React, { createContext, useEffect, useState } from "react";
import { getAuth } from "firebase/auth";

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const auth = getAuth();

  useEffect(() => {
    const unsuscribed = auth.onIdTokenChanged((user) => {
        console.log({user}, ['from AuthProvider.js']);
      setUser(user);
    });
    return () => {
      unsuscribed();
    };
  }, [auth]);

  const [user, setUser] = useState({});

  return (
    <AuthContext.Provider value={{ user, setUser }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
