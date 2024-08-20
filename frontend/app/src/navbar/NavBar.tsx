import React from "react";
import NavMenu from "./NavMenu";

function NavBar() {
  const [isOpen, setOpen] = React.useState(false);
  return (
    <>
      <div className="bg-blue-500 relative md:bg-[#F7F8FD] px-5 py-3 md:pt-10 md:mb-6 lg:col-start-1 lg:row-start-1 lg:row-end-4 lg:p-0 lg:max-w-[250px] lg:justify-self-end">
        <div className="container mx-auto bg-blue-500 flex justify-between items-center md:bg-transparent gap-3 md:justify-between lg:flex-col md:items-stretch">
          <div className="md:bg-blue-500 md:rounded-xl grow lg:pt-20 md:p-5">
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
            <div
              className="bg-black/75 absolute top-[4.5rem] inset-x-0 h-screen z-10"
              onClick={() => setOpen(!isOpen)}
            >
              <div className="bg-[#F7F8FD] flex flex-col gap-5 p-5 max-w-[270px] h-screen ml-auto">
                <NavMenu />
              </div>
            </div>
          </>
        )}
      </div>
    </>
  );
}

export default NavBar;
