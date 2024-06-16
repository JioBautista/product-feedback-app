import React from "react";

function NavBar() {
  const buttonClasses = {
    className: "bg-blue-100 px-3 py-2 rounded-xl text-blue-900 font-bold",
  };
  return (
    <>
      <div className="bg-blue-500 relative">
        <div className="container mx-auto px-5 py-3 bg-blue-500 flex items-center justify-between">
          <div>
            <h1 className="text-white font-semibold tracking-wide">
              Frontend Mentor
            </h1>
            <h2 className="text-gray-200">Feedback Board</h2>
          </div>
          <img src="/assets/shared/mobile/icon-hamburger.svg" />
        </div>
        <div className="bg-gray-300 flex flex-col items-center absolute right-0 p-5 max-w-[270px] gap-5 h-screen">
          <div className="bg-white flex flex-wrap rounded-xl px-4 py-8 gap-3">
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

            <div>
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
        </div>
      </div>
    </>
  );
}

export default NavBar;
