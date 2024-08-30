import React from "react";
import { useStore } from "../store/useStore";

function SuggestionDropDown() {
  const sort = useStore((state) => state.sort);
  const setSort = useStore((state) => state.setSort);
  const [isOpen, setOpen] = React.useState(false);

  const dropDownSelection = (title: string) => {
    setSort(title);
    setOpen(!isOpen);
  };
  return (
    <div className="relative">
      <div className="cursor-pointer" onClick={() => setOpen(!isOpen)}>
        <p>
          <span className="text-gray-300">Sort By :</span>
          <span className="ml-2 font-semibold tracking-wide">{sort}</span>
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
                className={`p-3 ${
                  index != 3 ? "border-b border-b-1" : null
                } hover:text-[#AD1FEA]`}
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
