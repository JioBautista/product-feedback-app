import { Link, Outlet } from "react-router-dom";

function Roadmap() {
  return (
    <div>
      <div className="flex items-center justify-between px-5 py-10 bg-[#373F68] text-white">
        <div>
          <div className="flex items-center gap-5">
            <img src="/public/assets/shared/icon-arrow-left.svg" />
            <Link to={"/"} className="font-bold">
              Go Back
            </Link>
          </div>
          <h1 className="font-bold text-xl">Roadmap</h1>
        </div>

        <button className="bg-blue-500 px-6 py-4 rounded-xl font-semibold tracking-wide">
          + Add Feedback
        </button>
      </div>
      <div className="flex items-center justify-between px-5 py-8 border-b-2 text-gray-400 font-semibold">
        <p>Planned</p>
        <p>In-Progress</p>
        <p>Live</p>
      </div>
    </div>
  );
}

export default Roadmap;
