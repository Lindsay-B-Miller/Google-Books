import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import SearchBooks from "./pages/SearchBooks";
import Saved from "./pages/Saved";
// import NoMatch from "./pages/NoMatch";
import Nav from "./components/Nav";

function App() {
  return (

    <div>
      <Nav />
      {!(window.location.pathname === "/saved") ?
        <SearchBooks />
        :
        <Saved />
      }
    </div>

  );
}

export default App;
