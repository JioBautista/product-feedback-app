import SuggestionDropDown from "./SuggestionDropDown";
import { Link } from "react-router-dom";

function SuggestionsMenu() {
  return (
    <div className="bg-[#373F68] text-white md:bg-[#F7F8FD] lg:col-span-2 md:px-5">
      <div className="container mx-auto px-5 py-3 flex justify-between items-center md:bg-[#373F68] md:rounded-xl">
        {/* A dropdown component that sorts data by the number of upvotes or comments */}
        <SuggestionDropDown />

        <Link to={"/new"}>
          <button className="bg-[#AD1FEA] px-5 py-4 rounded-xl font-semibold tracking-wide lg:py-3 text-sm hover:bg-[#C75AF6]">
            + Add Feedback
          </button>
        </Link>
      </div>
    </div>
  );
}

export default SuggestionsMenu;
