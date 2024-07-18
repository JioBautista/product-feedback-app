import SuggestionDropDown from "./SuggestionDropDown";
import { Link } from "react-router-dom";

function SuggestionsMenu() {
  return (
    <div className="bg-indigo-950 text-white">
      <div className="container px-5 py-3 flex justify-between items-center">
        <SuggestionDropDown />
        <Link to={"/new"}>
          <button className="bg-blue-500 px-6 py-4 rounded-xl font-semibold tracking-wide">
            + Add Feedback
          </button>
        </Link>
      </div>
    </div>
  );
}

export default SuggestionsMenu;
