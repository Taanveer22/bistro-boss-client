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
    setLoading(true);
    return signOut(auth);
  };

  const updateUserProfile = (name, photo) => {
    setLoading(true);
    return updateProfile(auth.currentUser, {
      displayName: name,
      photoURL: photo,
    });
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      console.log("current user from auth provider", currentUser);

      try {
        if (currentUser) {
          // get and store token
          const userPayload = { email: currentUser?.email };
          axiosPublic
            .post("/jwt/login", userPayload)
            .then((res) => {
              console.log(res.data);
              if (res?.data?.token) {
                localStorage.setItem("access-token", res.data.token);
              }
            })
            .catch((error) => {
              console.log("jwt token login error", error);
            });
        } else {
          // remove token
          localStorage.removeItem("access-token");
        }
      } catch (error) {
        console.log("authprovider useEffect error", error);
      } finally {
        setLoading(false);
      }
    });

    return () => {
      unsubscribe();
    };
  }, [setUser, setLoading, axiosPublic]);

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
