import React, { createContext, useContext, useState } from "react";

export const AuthContext = createContext();
export const AuthProvider = ({ children }) => {
  const inAuth = localStorage.getItem("user");

  const [authUser, setAuthUser] = useState(inAuth ? JSON.parse(inAuth) : undefined);
  return <AuthContext.Provider value={[authUser, setAuthUser]}>{children}</AuthContext.Provider>;
};

export const useAuth = () => useContext(AuthContext);
