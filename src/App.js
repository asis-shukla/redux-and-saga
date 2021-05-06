import React from "react";
import NavBar from "./components/navbar";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import UserList from "./components/userlist/userlist";
import BlogPosts from "./components/blogposts/blogposts";

const About = () => <div> About Component </div>;
const Home = () => <div> Home Component </div>;

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <NavBar />
        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/blogposts">
            <BlogPosts />
          </Route>
          <Route path="/userlist">
            <UserList />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
