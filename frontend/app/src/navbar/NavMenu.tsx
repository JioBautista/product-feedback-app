import { Link } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { fetchFeedbacks } from "../api/fetchFeedbacks";

function NavMenu() {
  const { isPending, isError, data } = useQuery({
    queryKey: ["feedbacks"],
    queryFn: () => fetchFeedbacks("http://127.0.0.1:8000/product-requests/"),
    staleTime: 120000,
  });
  const buttonClasses = {
    className: "bg-[#F2F4FF] px-3 py-2 rounded-xl text-[#4661E6] font-bold",
  };
  const planned = data?.filter((item: any) => item.status === "planned");
  const inProgress = data?.filter((item): any => item.status === "in-progress");
  const live = data?.filter((item) => item.status === "live");
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
          <h1 className="font-bold">Roadmap</h1>
          <Link className="block underline text-[#4661E6]" to="/roadmap">
            View
          </Link>
        </div>

        <div className="space-y-3">
          <div className="flex justify-between items-center gap-3">
            <div className="bg-[#F49F85] rounded-full w-[10px] h-[10px]"></div>
            <h1 className="text-gray-500">Planned</h1>
            <h1 className="font-bold grow text-right">{planned?.length}</h1>
          </div>

          <div className="flex justify-between items-center gap-3">
            <div className="bg-[#AD1FEA] rounded-full w-[10px] h-[10px]"></div>
            <h1 className="text-gray-500">In-Progress</h1>
            <h1 className="font-bold grow text-right">{inProgress?.length}</h1>
          </div>

          <div className="flex justify-between items-center gap-3">
            <div className="bg-[#62BCFA] rounded-full w-[10px] h-[10px]"></div>
            <h1 className="text-gray-500">Live</h1>
            <h1 className="font-bold grow text-right">{live?.length}</h1>
          </div>
        </div>
      </div>
    </>
  );
}

export default NavMenu;
