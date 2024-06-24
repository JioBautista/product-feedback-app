import React from "react";
import NavBar from "./navbar/NavBar";
import SuggestionsMenu from "./suggestions-menu/SuggestionsMenu";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <>
      <div>
        <NavBar />
        <SuggestionsMenu />
        <Outlet />
      </div>
    </>
  );
}

export default App;
