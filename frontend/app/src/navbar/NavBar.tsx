import React from "react";
import NavMenu from "./NavMenu";

function NavBar() {
  const [isOpen, setOpen] = React.useState(false);
  return (
    <>
      <div className="bg-blue-500 relative md:bg-[#F7F8FD] px-5 md:px-10 md:pt-10 md:mb-6 lg:col-span-1">
        <div className="container mx-auto  py-3 bg-blue-500 flex justify-between md:bg-transparent gap-3 md:justify-between lg:flex-col">
          <div className="md:bg-blue-500 md:pt-28 md:px-5 md:pb-5 md:rounded-xl">
            <h1 className="text-white font-semibold tracking-wide">
              Frontend Mentor
            </h1>
            <h2 className="text-gray-200">Feedback Board</h2>
          </div>

          {isOpen ? (
            <img
              src="/public/assets/shared/mobile/icon-close.svg"
              className="cursor-pointer md:hidden"
              onClick={() => setOpen(!isOpen)}
            />
          ) : (
            <img
              src="/assets/shared/mobile/icon-hamburger.svg"
              className="cursor-pointer md:hidden"
              onClick={() => setOpen(!isOpen)}
            />
          )}
          <div className="hidden md:flex gap-3 lg:flex-col">
            <NavMenu />
          </div>
        </div>
        {isOpen && (
          <>
            <div className="bg-[#F7F8FD] flex flex-col items-center absolute right-0 p-5 max-w-[270px] gap-5 h-auto rounded-br-xl rounded-bl-xl">
              <NavMenu />
            </div>
          </>
        )}
      </div>
    </>
  );
}

export default NavBar;
