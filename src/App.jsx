import React, { useState, useEffect } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { OnlyPublicRoute, PrivateRoute } from "./components";
import { LoadingScreen } from "./components/LoadingScreen/LoadingScreen";
import { LoginPage } from "./pages/Login/Login.page";
import { LogsFeedPage } from "./pages/LogsFeed/LogsFeed.page";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <OnlyPublicRoute redirectTo="/feed" path="/login">
            <LoginPage />
          </OnlyPublicRoute>
          <PrivateRoute path="/feed">
            <LogsFeedPage />
          </PrivateRoute>
        </Switch>
      </BrowserRouter>
    </div>
  );
};

export default App;
