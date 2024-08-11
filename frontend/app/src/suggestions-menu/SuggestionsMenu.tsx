import SuggestionDropDown from "./SuggestionDropDown";
import { Link } from "react-router-dom";

function SuggestionsMenu() {
  return (
    <div className="bg-[#373F68] text-white md:bg-[#F7F8FD]">
      <div className="container mx-auto px-5 py-3 flex justify-between items-center md:bg-[#373F68] md:rounded-xl">
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
