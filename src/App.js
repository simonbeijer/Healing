import React from "react";
import Header from "./components/Header/header";
import Footer from "./components/Footer/footer";
import Home from "./components/Home/home";
import About from "./components/About/about";
import Products from "./components/Products/products";
import Contact from "./components/Contact/contact";
import Healing from "./components/Healing/healing";

import { BrowserRouter, Switch, Route } from "react-router-dom";
import SideLogo from "./components/SideLogo/sidelogo";

function App() {
  return (
    <div className="App">
      <BrowserRouter basename="">
        <Header />
        <SideLogo />
        <Switch>
          <Route path="/about" component={About} />
          <Route path="/products" component={Products} />
          <Route path="/contact" component={Contact} />
          <Route path="/healing" component={Healing} />
          <Route path="/" component={Home} />
        </Switch>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
