import React, { createContext, useContext, useState } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [authenticated, setAuthenticated] = useState(false);

  const signUp = async (formData) => {
    // Implement your sign-up logic here
    // For example, you might make an API call to register the user

    // For now, let's consider it always successful
    setAuthenticated(true);
    return true;
  };

  const signIn = async (credentials) => {
    // Implement your sign-in logic here
    // For now, let's consider it always successful
    setAuthenticated(true);
    return true;
  };

  const signOut = () => {
    // Implement your sign-out logic here
    // For now, let's consider it always successful
    setAuthenticated(false);
  };

  const value = {
    authenticated,
    signUp,
    signIn,
    signOut,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
