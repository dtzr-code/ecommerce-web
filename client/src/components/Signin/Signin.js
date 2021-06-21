import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Modal } from "semantic-ui-react";
import { auth } from "../../firebase";
import { login, selectUser } from "../../slices/userSlice";
import "./styles.css";

function Signin({ openModal, setOpenModal }) {

  const dispatch = useDispatch()
  const user = useSelector(selectUser)

  //Signing In
  const emailRef = useRef(null);
  const passwordRef = useRef(null);

  const signIn = (e) => {
    e.preventDefault();

    auth
      .signInWithEmailAndPassword(
        emailRef.current.value,
        passwordRef.current.value
      )
      .then(() => {
        alert("Login successfully!")
        window.location.reload();
      })
      .catch((error) => {
        alert(error.message);
      });
  };

  //For Signing up
  const NewemailRef = useRef(null);
  const NewpasswordRef = useRef(null);

  const register = (e) => {

    e.preventDefault();

    auth
      .createUserWithEmailAndPassword(
        NewemailRef.current.value,
        NewpasswordRef.current.value
      )
      .then(alert("Sign up successful!"))
      .catch((error) => {
        alert(error.message);
      });
  };


  //control state of signin/signout component
  const [signin, setSignin] = useState(true);

  return (
    <Modal
      onClose={() => setOpenModal(false)}
      onOpen={() => setOpenModal(true)}
      open={openModal}
    >
      <div
        class={`container ${!signin ? "right-panel-active" : ""}`}
        id="container"
      >
        <div class="form-container sign-up-container">
          <form action="#">
            <h1 className="sign__h1">Create Account</h1>
            <span>or use your email for registration</span>
            <input ref={NewemailRef} type="email" placeholder="Email" />
            <input
              ref={NewpasswordRef}
              type="password"
              placeholder="Password"
            />
            <button className="signup__button" onClick={register}>
              Sign Up
            </button>
          </form>
        </div>
        <div class="form-container sign-in-container">
          <form action="#">
            <h1 className="sign__h1">Sign in</h1>
            <input ref={emailRef} type="email" placeholder="Email" />
            <input ref={passwordRef} type="password" placeholder="Password" />
            <a href="#">Forgot your password?</a>
            <button className="signin__button" onClick={signIn}>
              Sign In
            </button>
          </form>
        </div>
        <div class="overlay-container">
          <div class="overlay">
            <div class="overlay-panel overlay-left">
              <h1 className="sign__h1">Welcome Back!</h1>
              <p className="sign__p">
                To keep connected with us please login with your personal info
              </p>
              <button
                onClick={() => setSignin(true)}
                class="ghost"
                className="signIn"
              >
                Sign In
              </button>
            </div>
            <div class="overlay-panel overlay-right">
              <h1 className="sign__h1">Hello, Friend!</h1>
              <p className="sign__p">
                Enter your personal details and start journey with us
              </p>
              <button
                onClick={() => setSignin(false)}
                class="ghost"
                className="signUp"
              >
                Sign Up
              </button>
            </div>
          </div>
        </div>
      </div>
    </Modal>
  );
}

export default Signin;
