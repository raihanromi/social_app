import { createContext, useReducer } from "react";
import AuthReducer from "./AuthReducer";

const INITIAL_STATE = {
  user: {
    username: "jane_smith",
    email: "jane.smith@example.com",
    password: "$2b$10$KD0er6MlcFWwFtJt0Ta4IuGHLeyCIPM7GHsdKQJWIQ.l2AwSGdbdm",
    profilePicture: "",
    coverPicture: "",
    followers: [],
    followings: [],
    isAdmin: false,
    desc: "Just a regular person.",
    city: "Los Angeles",
    from: "United States",
    _id: "65f1dc2ebe54e298079ea0c2",
    createdAt: "2024-03-13T17:02:38.786Z",
    updatedAt: "2024-03-13T17:02:38.786Z",
    __v: 0,
  },
  isFetching: false,
  error: false,
};

export const AuthContext = createContext(INITIAL_STATE);

export const AuthContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AuthReducer, INITIAL_STATE);
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
