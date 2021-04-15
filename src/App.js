import React from "react";
import "./statics/scss/index.sass";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Sidenav from "./components/Sidenav";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import ProjectDetails from "./components/ProjectDetails";
import SubmitProposal from "./components/SubmitProposal";
import Landing from "./components/Landing";
import TopNav from "./components/TopBar";
import Profile from "./components/Profile";
import Proposal from "./components/Proposal";
import MyStatus from "./components/MyStatus";
import MyDashboard from "./components/MyDashboard";
import MyJobs from "./components/MyJobs";
import Contracts from "./components/Contracts";




import "./App.css";
import Dash from "./components/HeroSection";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact={true} component={Home} />
        <Route path="/projectdetail" exact={true} component={ProjectDetails} />
        <Route path="/proposal" exact={true} component={SubmitProposal} />
        <Route path="/landing" exact={true} component={Landing} />
        <Route path="/profile" exact={true} component={Profile} />
        <Route path="/prposl" exact={true} component={Proposal} />
        <Route path="/status" exact={true} component={MyStatus} />
        <Route path="/mydashboard" exact={true} component={MyDashboard} />
        <Route path="/myjobs" exact={true} component={MyJobs} />
        <Route path="/contract" exact={true} component={Contracts} />
      </Switch>
    </Router>
  );
}

export default App;
