import React from "react";

function SuggestionDropDown() {
  const [isOpen, setOpen] = React.useState(false);
  const [title, setTitle] = React.useState("Most Upvotes");

  const dropDownSelection = (title) => {
    setTitle(title);
    setOpen(!isOpen);
  };
  return (
    <div className="relative">
      <div className="cursor-pointer" onClick={() => setOpen(!isOpen)}>
        <p>
          <span className="text-gray-300">Sort By:</span> {title}
        </p>
      </div>
      {isOpen ? (
        <div className="absolute bg-red-200 text-gray-500 rounded-xl -bottom-64 left-0 space-y-2 p-2 cursor-pointer">
          {[
            "Most Upvotes",
            "Least Upvotes",
            "Most Comments",
            "Least Comments",
          ].map((items, index) => (
            <>
              <div
                className={`p-3 ${
                  index != 3 ? "border-b border-gray-500" : null
                }`}
                onClick={() => dropDownSelection(items)}
              >
                <p>{items}</p>
              </div>
            </>
          ))}
        </div>
      ) : null}
    </div>
  );
}

export default SuggestionDropDown;
