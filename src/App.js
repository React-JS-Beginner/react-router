import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Call from "./components/Call/Call";
import Contacts from "./components/Contacts/Contacts";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import NotFound from "./components/NotFound/NotFound";
import Posts from "./components/Posts/Posts";
import UserPost from "./components/UserPost/UserPost";
import Users from "./components/Users/Users";

function App() {
  return (
    <div>
      <Router>
        <Header></Header>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>

          <Route path="/home">
            <Home></Home>
          </Route>

          <Route path="/posts">
            <Posts></Posts>
          </Route>

          <Route path="/users">
            <Users></Users>
          </Route>

          <Route path="/contacts">
            <Contacts></Contacts>
          </Route>

          <Route path="/userpost/userID">
            <UserPost></UserPost>
          </Route>

          <Route path="/call/:callId">
            <Call></Call>
          </Route>

          <Route path="*">
            <NotFound></NotFound>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
