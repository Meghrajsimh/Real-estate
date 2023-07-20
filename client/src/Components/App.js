import React from "react";
import NavBar from "././NavBar/NavBar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import SearchBar from "././SearchBar.jsx";
import Banner from "..//Components/Banner"
import MainContent from "././MainContent";
import Footer from "././Footer"
import Register from "././Register";
import HouseListing from "././HouseListing";
import HouseOnSale from "././HouseOnSale";
import HouseOnRent from "././HouseOnRent";
import Login from "././Login"
import "./../StyleSheet/App.css"
import HouseDescription from "././HouseDescription";
import FilterSearchResults from "././FilterSearch";
import Contact from "././Contact-us"
import SearchResults from "././SearchResults";
const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/house/search/:query">
          <NavBar />
          <SearchResults />
        </Route>
        <Route path="/contact-us">
          <NavBar />
          <Contact />
        </Route>
        <Route path="/search/results-location/:location">
          <NavBar />
          <FilterSearchResults />
        </Route>
        <Route path="/house/:location/:id">
          <NavBar />
          <HouseDescription />
        </Route>
        <Route path="/login">
          <NavBar />
          <Login />
        </Route>
        <Route path="/register">
          <NavBar />
          <Register />
        </Route>
        <Route path="/api/house/sale">
          <NavBar />
          <HouseOnSale />
        </Route>
        <Route path="/properties/rent">
          <NavBar />
          <HouseOnRent />
        </Route>
        <Route path="/properties/sell">
          <NavBar />
          <HouseListing />
        </Route>
        <Route to="/">
          <NavBar />
          <SearchBar />
          <Banner />
          <MainContent />
          <Footer />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
