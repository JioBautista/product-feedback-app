import NavBar from "./navbar/NavBar";
import SuggestionsMenu from "./suggestions-menu/SuggestionsMenu";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <div className="lg:grid lg:grid-cols-3 lg:mx-auto lg:py-10 max-w-[1110px]">
      {/* Navigation bar component */}
      <NavBar />
      {/* Right below the navigation bar there is another dropdown and a button component */}
      <SuggestionsMenu />
      <Outlet />
    </div>
  );
}

export default App;
