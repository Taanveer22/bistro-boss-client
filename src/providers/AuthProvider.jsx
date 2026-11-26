import { useEffect, useState } from "react";
import AuthContext from "./AuthContext";
import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import { auth } from "../firebase/config";
import useAxiosPublic from "../hooks/useAxiosPublic";

const provider = new GoogleAuthProvider();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const axiosPublic = useAxiosPublic();

  const googleSigninUser = () => {
    setLoading(true);
    return signInWithPopup(auth, provider);
  };

  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const signInUser = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  const signOutUser = () => {
    return signOut(auth);
  };

  const updateUserProfile = (name, photo) => {
    return updateProfile(auth.currentUser, {
      displayName: name,
      photoURL: photo,
    });
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (currentUser) => {
      localStorage.removeItem("access-token");
      console.log("current user from auth provider", currentUser);

      try {
        if (currentUser) {
          // generate custom jwt
          const userPayload = { email: currentUser?.email };
          const res = await axiosPublic.post("/jwt/login", userPayload);
          console.log(res.data);
          // store custom jwt
          if (res?.data?.token) {
            localStorage.setItem("access-token", res.data.token);
          }
          console.log("JWT stored");
        }
      } catch (error) {
        console.log("authprovider useEffect error", error);
      } finally {
        setUser(currentUser);
        setLoading(false);
      }
    });

    return () => {
      unsubscribe();
    };
  }, [axiosPublic]);

  const authInfo = {
    user,
    loading,
    googleSigninUser,
    createUser,
    signInUser,
    signOutUser,
    updateUserProfile,
  };

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
