import React from "react";
import { Link } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { fetchFeedbacks } from "../api/fetchFeedbacks";
import RoadmapList from "./RoadmapList";

function Roadmap() {
  const { data } = useQuery({
    queryKey: ["feedbacks"],
    queryFn: () => fetchFeedbacks("http://127.0.0.1:8000/product-requests/"),
    staleTime: 120000,
  });
  const planned = data?.filter((item: any) => item.status === "planned");
  const inProgress = data?.filter((item): any => item.status === "in-progress");
  const live = data?.filter((item) => item.status === "live");
  const [tabIndex, setTab] = React.useState(0);

  const tabs = [
    <div>
      <h1 className="font-bold text-lg">Planned ({planned?.length})</h1>
      <p className="text-gray-500 mb-5">Ideas prioritized for research</p>
      <RoadmapList data={planned} border={"border-[#F49F85]"} />
    </div>,
    <div>
      <h1 className="font-bold text-lg">In-Progress ({inProgress?.length})</h1>
      <p className="text-gray-500 mb-5">Currently being developed</p>
      <RoadmapList data={inProgress} border={"border-[#AD1FEA]"} />
    </div>,
    <div>
      <h1 className="font-bold text-lg">Live ({live?.length})</h1>
      <p className="text-gray-500 mb-5">Released Features</p>
      <RoadmapList data={live} border={"border-[#62BCFA]"} />
    </div>,
  ];

  return (
    <div className="max-w-[1110px] mx-auto">
      <div className=" bg-[#373F68] text-white md:bg-transparent p-5">
        <div className="flex items-center justify-between bg-[#373F68] md:px-10 md:py-5 md:rounded-xl">
          <div className="space-y-1">
            <div className="flex items-center gap-5">
              <img src="/public/assets/shared/icon-arrow-left.svg" />
              <Link to={"/"} className="font-bold md:text-sm">
                Go Back
              </Link>
            </div>
            <h1 className="font-bold text-xl">Roadmap</h1>
          </div>
          <Link to={"/new"} className="block">
            <button className="bg-blue-500 px-4 py-3 rounded-xl font-semibold tracking-wide md:text-sm">
              + Add Feedback
            </button>
          </Link>
        </div>
      </div>

      <div
        className={`flex items-center justify-between border-b-2 text-gray-400 font-semibold bg-[#F7F8FD] md:hidden`}
      >
        <button className="px-5 py-8 cursor-pointer" onClick={() => setTab(0)}>
          Planned({planned?.length})
        </button>
        <button className="px-5 py-8 cursor-pointer" onClick={() => setTab(1)}>
          In-Progress({inProgress?.length})
        </button>
        <button className="px-5 py-8 cursor-pointer" onClick={() => setTab(2)}>
          Live({live?.length})
        </button>
      </div>

      <div className="p-5 md:hidden">{tabs[tabIndex]}</div>

      <div className="hidden md:grid md:grid-cols-3 md:gap-3 xl:gap-5 px-5">
        {tabs}
      </div>
    </div>
  );
}

export default Roadmap;
