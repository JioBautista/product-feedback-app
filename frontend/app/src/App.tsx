import NavBar from "./navbar/NavBar";
import SuggestionsMenu from "./suggestions-menu/SuggestionsMenu";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <div className="lg:grid lg:grid-cols-3 lg:container lg:mx-auto lg:p-10">
      {/* Navigation bar component */}
      <NavBar />
      <SuggestionsMenu />
      <Outlet />
    </div>
  );
}

export default App;
