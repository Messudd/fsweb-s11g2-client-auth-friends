import React, { useState }  from "react";
import { Route, Link, Switch} from "react-router-dom";
import { Login } from "./components/Login";
import "./App.css";
import AddFriend from "./components/AddFriend";
import FriendList from "./components/FriendList";

function App() {
  const [liste, setListe] = useState([]);

  return (
    <>
      <div className="app">
        <header>
          <nav>
            <h3>FRIENDS || DATABASE</h3>
            <ul>
              <li>
                <Link
                  to="/login"
                  className="head-link"
                >
                  LOGIN.
                </Link>
              </li>
              <li>
                <Link to="/friendList" className="head-link">
                  FRIENDLIST.
                </Link>
              </li>
              <li>
                <Link to="/addFriend" className="head-link">
                  ADDFRIEND.
                </Link>
              </li>
              <li>
                <Link to="/login" className="head-link">
                  LOGOUT
                </Link>
              </li>
            </ul>
          </nav>
        </header>
        <main>
          <Switch>
            <Route path="/login" exact>
              <Login/>
            </Route>
            <Route path="/friendList" exact>
              <FriendList liste= {liste} />
            </Route>
            <Route path="/addFriend" exact>
              <AddFriend liste= {liste}  setListe = {setListe}/>
            </Route>
            <Route path="/logout" exact></Route>
          </Switch>
        </main>
      </div>
    </>
  );
}

export default App;
