import { useState } from "react";
import { AuthContext } from "./auth.context";

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [isAuthenticated, setAuth] = useState(
    localStorage.getItem("auth") === "true"
  );

  const login = (email: string, password: string) => {
    if (email === "admin@test.com" && password === "admin123") {
      setAuth(true);
      localStorage.setItem("auth", "true");
      return true;
    }
    return false;
  };

  const logout = () => {
    setAuth(false);
    localStorage.removeItem("auth");
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
