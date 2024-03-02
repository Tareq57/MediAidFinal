import { createContext, useState, useEffect } from "react";

const AuthContext = createContext();

export function AuthContextProvider({ children }) {
  const [state, setState] = useState({
    user : localStorage.getItem("user") != null ? JSON.parse(localStorage.getItem("user")) : null,
    role : localStorage.getItem("role"),
    token : localStorage.getItem("token"),
    cartsize : localStorage.getItem("cartsize")
  });

  useEffect(() => {
    localStorage.setItem("user", JSON.stringify(state.user));
    localStorage.setItem("role", state.role);
    localStorage.setItem("token", state.token);
    localStorage.setItem("cartsize", state.cartsize);
  }, [state]);

  return <AuthContext.Provider value={{state, setState}}>{children}</AuthContext.Provider>;
}

export default AuthContext;
