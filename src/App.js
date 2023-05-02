import "./App.css";
import AddFriend from "./components/AddFriend";
import FriendList from "./components/FriendList";
import Login from "./components/Login";
import { Route, Link, Switch } from "react-router-dom";
import PrivateRoute from "./components/PrivateRoute";
import Logout from "./components/Logout";

function App() {
  return (
    <div className="App">
      <div className="flex-row">
        <div className="flex p-3 m-4 justify-center ">
          <h1 className="m-4 text-center text-lg">FRIENDS DATABASE</h1>
          <Link to="/login">
            <button className="bg-black text-white p-8 m-4">LOGIN</button>
          </Link>
          <Link to="/friendlist">
            <button className="bg-black text-white p-8 m-4">FRIENDLIST</button>
          </Link>
          <Link to="/addfriend">
            <button className="bg-black text-white p-8 m-4">ADDFRIEND</button>
          </Link>

          <Logout />
        </div>
      </div>
      <Switch>
        <Route exact path="/login" component={Login} />
        <PrivateRoute exact path="/friendlist" component={FriendList} />
        <PrivateRoute exact path="/addfriend" component={AddFriend} />
      </Switch>
    </div>
  );
}

export default App;
