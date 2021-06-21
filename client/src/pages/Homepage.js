import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import FactsPage from "../components/FactsPage/FactsPage";
import Footer from "../components/Footer/Footer";
import Hero from "../components/Hero/Hero";
import Popular from "../components/Popular/Popular";
import Receipes from "../components/Receipes/Receipes";
import { auth } from "../firebase";
import { login, logout } from "../slices/userSlice";

export default function Homepage() {
  const dispatch = useDispatch();

  useEffect(() => {
    //acts like a listerner so it listens to any authenticated state change
    //if log in and refresh, it will store it to your local memory
    const unsubscribe = auth.onAuthStateChanged((userAuth) => {
      if (userAuth) {
        //logged in
        dispatch(
          login({
            uid: userAuth.uid,
            email: userAuth.email,
          })
        );
      } else {
        //logged out
        dispatch(logout());
      }
    });
    //cleaning up
    //if the component was to unmount, we don't want to duplicate another listerner
    return unsubscribe;
  }, [dispatch, auth]);

  return (
    <div style={{backgroundColor:'black', height: '100vp'}}>
      <Hero />
      <Popular />
      <FactsPage />
      <Receipes />
      <Footer/>
    </div>
  );
}
