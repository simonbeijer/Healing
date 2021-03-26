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
import { useReactPath } from "./pathHook";
function App() {
  const path = useReactPath();
  React.useEffect(() => {
    console.log(path);
  });

  const displayNone = { display: "none" };
  const display = { display: "flex" };
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <SideLogo />
        <Switch>
          <Route path="/about" component={About} />
          <Route path="/products" component={Products} />
          <Route path="/contact" component={Contact} />
          <Route path="/healing" component={Healing} />
          <Route exact path="/" component={Home} />
        </Switch>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
