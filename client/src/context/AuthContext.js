import { createContext, useReducer } from "react";
import AuthReducer from "./AuthReducer";

const INITIAL_STATE = {
  user: {
    profilePicture: "person/2.jpeg",
    coverPicture: "post/9.jpeg",
    followers: [],
    following: ["60f268575801760408f2d2e8"],
    isAdmin: false,
    _id: "60f26f60b57caf22cc646469",
    username: "janedoe",
    email: "jane@email.com",
    city: "Paris",
    desc: "Welcome to my profile page",
    from: "Berlin",
    relationship: 2,
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
