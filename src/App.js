// App.jsx

import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import HomePage from "./components/HomePage";
import ProductPage from "./components/ProductPage";
import CartPage from "./components/CartPage";
import LoginPage from "./components/LoginPage";
import "./App.css";

function App() {
  const [loggedIn, setLoggedIn] = useState(false);

  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/" exact>
            <HomePage />
          </Route>
          <Route path="/product/:id">
            <ProductPage />
          </Route>
          <Route path="/cart">
            <CartPage />
          </Route>
          <Route path="/login">
            <LoginPage loggedIn={loggedIn} setLoggedIn={setLoggedIn} />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
