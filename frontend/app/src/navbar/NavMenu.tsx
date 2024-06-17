import React from "react";

function NavMenu() {
  const buttonClasses = {
    className: "bg-blue-100 px-3 py-2 rounded-xl text-blue-900 font-bold",
  };
  return (
    <>
      <div className="bg-white flex flex-wrap rounded-xl px-4 py-8 gap-3 w-[230px]">
        <button {...buttonClasses}>All</button>
        <button {...buttonClasses}>UI</button>
        <button {...buttonClasses}>UX</button>
        <button {...buttonClasses}>Enhancement</button>
        <button {...buttonClasses}>Bug</button>
        <button {...buttonClasses}>Feature</button>
      </div>
      <div className="bg-white px-4 py-8 rounded-xl space-y-5 w-[230px]">
        <div className="flex justify-between">
          <h1>Roadmap</h1>
          <a>View</a>
        </div>

        <div className="space-y-3">
          <div className="flex">
            <h1>Planned</h1>
            <h1>2</h1>
          </div>

          <div className="flex">
            <h1>In-Progress</h1>
            <h1>3</h1>
          </div>

          <div className="flex">
            <h1>Live</h1>
            <h1>1</h1>
          </div>
        </div>
      </div>
    </>
  );
}

export default NavMenu;
