import { initializeApp } from "firebase/app";
import {
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  GoogleAuthProvider,
  signInWithEmailAndPassword,
  signInWithPopup,
  signInWithRedirect,
  signInWithCustomToken,
  signOut,
} from "firebase/auth";
import React, {
  createContext,
  useContext,
  useEffect,
  useReducer,
  useMemo,
  ReactNode,
} from "react";
import Config from "react-native-config";

type User = any | null;

interface FirebaseInitialContextType {
  loading: boolean;
  user: User;
}

interface FirebaseContextType {
  loading: boolean;
  user: User;
  loginWithGooglePopup: () => void;
  logout: () => void;
  loginWithGoogleRedirect: () => void;
  registerUserWithEmailAndPassword: (email: string, password: string) => void;
  loginWithEmailAndPassword: (email: string, password: string) => void;
  getIdToken: () => boolean | Promise<string | boolean>;
  ctxSignOut: () => void;
}

const firebaseInitialContext = {
  user: null,
  loading: true,
};

export const FirebaseContext = createContext(firebaseInitialContext);

export const useFirebase = () => {
  const context = useContext(FirebaseContext);
  if (!context) {
    throw new Error("useFirebase must be used within a FirebaseProvider");
  }
  return context;
};

export const FirebaseProvider = ({ children }: { children: ReactNode }) => {
  const initialState = useMemo(() => {
    return firebaseInitialContext;
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
        return { ...state, user: action.payload, loading: false };
      case "LOGOUT":
        return { ...state, user: null, loading: false };
      default:
        return state;
    }
  };

  const [state, dispatch] = useReducer(firebaseReducer, initialState);

  const firebaseConfig = {
    apiKey: "AIzaSyCTPnE4WBIt5iFFzOH-sQbDyEukwJ2Mi_k",
    authDomain: "todo-list-demo-fff76.firebaseapp.com",
    projectId: "todo-list-demo-fff76",
    storageBucket: "todo-list-demo-fff76.appspot.com",
    messagingSenderId: "696962301739",
    appId: "1:696962301739:web:c171b343ab9d809ff08f6e",
    measurementId: "G-VZ5JJT0HHV",
  };

  // const firebaseConfig = {
  //   apiKey: process.env.EXPO_PUBLIC_FIREBASE_API_KEY,
  //   authDomain: process.env.EXPO_PUBLIC_FIREBASE_AUTH_DOMAIN,
  //   projectId: process.env.EXPO_PUBLIC_FIREBASE_PROJECT_ID,
  //   storageBucket: process.env.EXPO_PUBLIC_FIREBASE_STORAGE_BUCKET,
  //   messagingSenderId: process.env.EXPO_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  //   appId: process.env.EXPO_PUBLIC_FIREBASE_APP_ID,
  //   measurementId: process.env.EXPO_PUBLIC_FIREBASE_MEASUREMENT_ID,
  // };

  console.log("firebaseConfig: ", firebaseConfig);

  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app);
  const provider = new GoogleAuthProvider();

  // Listen for Firebase authentication state changes
  useEffect(() => {
    dispatch({ type: "CONNECTED" });
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        dispatch({ type: "SET_USER", payload: user });
      } else {
        dispatch({ type: "LOGOUT" });
      }
    });

    return () => unsubscribe();
  }, []);

  const loginWithGooglePopup = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential?.accessToken;
        // The signed-in user info.
        const user = result.user;
        // IdP data available using getAdditionalUserInfo(result)
        dispatch({ type: "SET_USER", payload: user });
      })
      .catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.customData.email;
        // The AuthCredential type that was used.
        const credential = GoogleAuthProvider.credentialFromError(error);
      });
  };

  const logout = () => {
    signOut(auth);
  };

  const loginWithGoogleRedirect = () => {
    signInWithRedirect(auth, provider);
  };

  const registerUserWithEmailAndPassword = (
    email: string,
    password: string,
  ) => {
    try {
      createUserWithEmailAndPassword(auth, email, password);
    } catch (error) {
      console.error("Create user error:", error);
    }
  };

  const loginWithEmailAndPassword = async (email: string, password: string) => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
    } catch (error) {
      console.error("Login user error:", error);
    }
  };

  const loginInWithCustomToken = (token: string) => {
    signInWithCustomToken(auth, token)
      .then((userCredential) => {
        const user = userCredential.user;
        return user;
      })
      .catch((error) => {
        console.error("Token sign in error: ", error);
      });
  };

  const getIdToken = () => {
    if (!auth.currentUser) return false;
    return auth.currentUser
      ?.getIdToken(true)
      .then((idToken) => {
        return idToken;
      })
      .catch((error) => {
        return false;
      });
  };

  const ctxSignOut = () => {
    dispatch({ type: "LOGOUT" });
  };

  const contextValue = useMemo(
    () => ({
      loading: state.loading,
      user: state.user,
      loginWithGooglePopup,
      logout,
      loginWithGoogleRedirect,
      registerUserWithEmailAndPassword,
      loginWithEmailAndPassword,
      loginInWithCustomToken,
      getIdToken,
      ctxSignOut,
    }),
    [state.user, state.loading],
  );

  return (
    <FirebaseContext.Provider value={contextValue}>
      {children}
    </FirebaseContext.Provider>
  );
};
