import { createContext, useReducer } from "react";
import AuthReducer from "./AuthReducer";

const INITIAL_STATE = {
  user: {
    "_id": "65d9f19ffc3abe1bc7cf583e",
    "username": "gojo",
    "email": "gojo@gmail.com",
    "password": "$2b$10$m2/vXMZ.nfDvlkPNFuh/ZugkDkPkROws1v3m71YndMjwdz1tV6rD.",
    "profilePicture": "person/2.jpeg",
    "coverPicture": "",
    "followers": [],
    "followings": [],
    "isAdmin": false,
    "createdAt": "2024-02-24T13:39:43.391Z",
    "updatedAt": "2024-02-24T13:39:43.391Z",
    "__v": 0
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
