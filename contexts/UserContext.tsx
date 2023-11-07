import React, {
  createContext,
  useContext,
  useEffect,
  useReducer,
  useMemo,
  ReactNode,
} from "react";

type User = any | null;

interface UserInitialContextType {
  user: User;
}

const userInitialContext = {
  user: null,
  loading: true,
};

export const UserContext = createContext(userInitialContext);

export const useUserCtx = () => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error("useUserCtx must be used within a UserProvider");
  }
  return context;
};

export const UserProvider = ({ children }: { children: ReactNode }) => {
  const initialState = useMemo(() => {
    return userInitialContext;
  }, []);

  type FirebaseAction =
    | { type: "CONNECTED" }
    | { type: "SET_USER"; payload: User }
    | { type: "LOGOUT" };

  const firebaseReducer = (
    state: typeof initialState,
    action: FirebaseAction,
  ) => {
    switch (action.type) {
      case "CONNECTED":
        return { ...state, loading: false };
      case "SET_USER":
        return { user: action.payload, loading: false };
      case "LOGOUT":
        return { ...state, user: null, loading: false };
      default:
        return state;
    }
  };

  const [state, dispatch] = useReducer(firebaseReducer, initialState);

  useEffect(() => {
    dispatch({ type: "CONNECTED" });
  }, []);

  const setUser = (user) =>
    new Promise((resolve, reject) => {
      dispatch({ type: "SET_USER", payload: user });
    });

  const contextValue = useMemo(
    () => ({
      loading: state.loading,
      user: state.user,
      setUser,
    }),
    [state.user, state.loading],
  );

  return <UserContext.Provider value={contextValue}></UserContext.Provider>;
};
