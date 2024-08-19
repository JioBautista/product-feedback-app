import React from "react";

function SuggestionDropDown() {
  const [isOpen, setOpen] = React.useState(false);
  const [title, setTitle] = React.useState("Most Upvotes");

  const dropDownSelection = (title: string) => {
    setTitle(title);
    setOpen(!isOpen);
  };
  return (
    <div className="relative">
      <div className="cursor-pointer" onClick={() => setOpen(!isOpen)}>
        <p>
          <span className="text-gray-300">Sort By :</span>
          <span className="ml-2 font-semibold tracking-wide">{title}</span>
        </p>
      </div>
      {isOpen ? (
        <div className="absolute bg-white text-gray-500 rounded-xl -bottom-[17rem] left-0 space-y-2 p-2 cursor-pointer shadow-2xl">
          {[
            "Most Upvotes",
            "Least Upvotes",
            "Most Comments",
            "Least Comments",
          ].map((items, index) => (
            <React.Fragment key={index}>
              <div
                className={`p-3 ${index != 3 ? "border-b border-b-1" : null}`}
                onClick={() => dropDownSelection(items)}
              >
                <p>{items}</p>
              </div>
            </React.Fragment>
          ))}
        </div>
      ) : null}
    </div>
  );
}

export default SuggestionDropDown;
