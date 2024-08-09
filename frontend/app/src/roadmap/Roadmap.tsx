import React from "react";
import { Link } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { fetchFeedbacks } from "../api/fetchFeedbacks";
import RoadmapList from "./RoadmapList";

function Roadmap() {
  interface Data {
    id: number;
    title: string;
    category: string;
    upvotes: number;
    status: string;
    description: string;
    comments: [];
  }
  const { isPending, isError, data } = useQuery({
    queryKey: ["feedbacks"],
    queryFn: () => fetchFeedbacks("http://127.0.0.1:8000/product-requests/"),
    staleTime: 120000,
  });
  const [RoadmapListData, setListData] = React.useState<Data[]>();
  const planned = data?.filter((item: any) => item.status === "planned");
  const inProgress = data?.filter((item): any => item.status === "in-progress");
  const live = data?.filter((item) => item.status === "live");
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
        <Link to={"/new"} className="block">
          <button className="bg-blue-500 px-6 py-4 rounded-xl font-semibold tracking-wide">
            + Add Feedback
          </button>
        </Link>
      </div>
      <div className="flex items-center justify-between border-b-2 text-gray-400 font-semibold bg-[#F7F8FD]">
        <button
          className="px-5 py-8 cursor-pointer"
          onClick={() => setListData(planned)}
        >
          Planned({planned?.length})
        </button>
        <button
          className="px-5 py-8 cursor-pointer"
          onClick={() => setListData(inProgress)}
        >
          In-Progress({inProgress?.length})
        </button>
        <button
          className="px-5 py-8 cursor-pointer"
          onClick={() => setListData(live)}
        >
          Live({live?.length})
        </button>
      </div>
      <RoadmapList data={RoadmapListData} />
    </div>
  );
}

export default Roadmap;
