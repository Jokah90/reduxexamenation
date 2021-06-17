import React from "react";
import "./App.css";
// Import the Route.
import { BrowserRouter, Switch, Route } from "react-router-dom";
import FirstPage from "./components/FirstPage";
import Menu from "./components/Menu";
import About from "./components/About";
import Status from "./components/Status";
import Profile from "./components/Profile";

function App() {
  return (
    <div className="flex-container">
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={FirstPage} />
          <Route exact path="/menu" component={Menu} />
          <Route path="/about" component={About} />
          <Route path="/status" component={Status} />
          <Route path="/profile" component={Profile} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}
export default App;
