import React from "react";
import "./App.css";
import { Route, Switch } from "react-router";
import dashBoard from "./components/dashBoard";

function App() {
  return (
    <React.Fragment>
      <Switch>
        <Route exact path="/" component={dashBoard} />
        {/* <Route exact path="/users" component={Addproduct} />
        <Route exact path="/adduser" component={CountLabel} />
        <Route exact path="/edituser/122" component={CountLabel} /> */}
      </Switch>
    </React.Fragment>
  );
}

export default App;
