import NavBar from "./navbar/NavBar";
import SuggestionsMenu from "./suggestions-menu/SuggestionsMenu";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <div className="relative">
      {/* <div className="bg-black z-5 absolute inset-0 opacity-50"></div> */}
      <NavBar />
      <SuggestionsMenu />
      <Outlet />
    </div>
  );
}

export default App;
