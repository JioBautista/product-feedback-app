import SuggestionDropDown from "./SuggestionDropDown";

function SuggestionsMenu() {
  return (
    <div className="bg-indigo-950 text-white">
      <div className="container px-5 py-3 flex justify-between items-center">
        <SuggestionDropDown />
        <button className="bg-blue-500 px-6 py-4 rounded-xl font-semibold tracking-wide">
          + Add Feedback
        </button>
      </div>
    </div>
  );
}

export default SuggestionsMenu;
