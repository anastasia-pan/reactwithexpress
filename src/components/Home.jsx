import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

const Home = ({ user, setUser }) => {
  return (
    <div className="homePage">
      <h2> Welcome to BiblioFile! </h2>
      <h4>This is the place to add your book dream list</h4>
    </div>
  );
};

export default Home;
