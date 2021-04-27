import React from "react";
import { HashRouter as Router, Switch, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import LeaderboardPage from "./pages/LeaderboardPage";
import { SkynetProvider } from "./state/SkynetContext";

export default function App() {
  return (
    <Router>
      <SkynetProvider>
        <Switch>
          <Route exact path="/">
            <LandingPage />
          </Route>
          <Route path="/leaderboard">
            <LeaderboardPage />
          </Route>
        </Switch>
      </SkynetProvider>
    </Router>
  );
}
