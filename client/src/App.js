import { useEffect } from "react";
import { useDispatch } from "react-redux";
import "./App.css";
import { auth } from "./firebase";
import Homepage from "./pages/Homepage";
import { login, logout } from "./slices/userSlice";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Success from './pages/Success/Success'

function App() {

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
    <Router>
      <Switch>
        <Route exact path="/">
          <Homepage />
        </Route>
        <Route exact path="/success">
          <Success/>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
