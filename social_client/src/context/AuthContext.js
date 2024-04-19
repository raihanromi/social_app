import { createContext, useEffect, useReducer } from "react";
import AuthReducer from "./AuthReducer";


const storedUser = localStorage.getItem("user");
const userFromLocalStorage = storedUser ? JSON.parse(storedUser) : null;

const INITIAL_STATE = {
  user: userFromLocalStorage,
  isFetching: false,
  error: false,
};

// const INITIAL_STATE = {
//   user:JSON.parse(localStorage.getItem("user")) || null,
//   isFetching: false,
//   error: false,
// };

export const AuthContext = createContext(INITIAL_STATE);

export const AuthContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AuthReducer, INITIAL_STATE);

  useEffect(()=>{
    localStorage.setItem("user", JSON.stringify(state.user))
  },[state.user])

  return (
    <AuthContext.Provider
      value={{
        user: state.user,
        isFetching: state.isFetching,
        error: state.error,
        dispatch,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
