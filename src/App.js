import "./App.css";
import { useState } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "./components/Home";
import Register from "./components/Register";
import Login from "./components/Login";
import Profile from "./components/Profile";
import BookList from "./components/Booklist";
import Header from "./components/Header";
import AddBook from "./components/AddBook";

// import AddBook from "./components/AddBook";

function App() {
  //props drilling, set user at a global level
  const [user, setUser] = useState(null);
  const [subscriptionUpdate, setSubscriptionUpdate] = useState(null);
  const [myList, setMyList] = useState([]);
  return (
    <div className="App">
      <Router>
        <Header user={user} setUser={setUser} />

        <Profile
          user={user}
          setUser={setUser}
          myList={myList}
          setMyList={setMyList}
          subscriptionUpdate={subscriptionUpdate}
          setSubscriptionUpdate={setSubscriptionUpdate}
        />
        <AddBook
          user={user}
          setUser={setUser}
          myList={myList}
          setMyList={setMyList}
          subscriptionUpdate={subscriptionUpdate}
          setSubscriptionUpdate={setSubscriptionUpdate}
        />

        <Home user={user} setUser={setUser} />
      </Router>
    </div>
  );
}

export default App;
