import React from "react";
import FeedBackError from "./FeedBackError";
import FeedbackCard from "./FeedbackCard";
import { useQuery } from "@tanstack/react-query";
import { useStore } from "../store/useStore";
import { fetchFeedbacks } from "../api/fetchFeedbacks";

function Feedback() {
  const { data } = useQuery({
    queryKey: ["feedbacks"],
    queryFn: () => fetchFeedbacks("http://127.0.0.1:8000/product-requests/"),
    staleTime: 120000,
  });
  const filterState = useStore((state) => state.filter);
  const filteredData = data?.filter((items) => items.category === filterState);
  console.log(filteredData);

  React.useEffect(() => {}, [filterState]);

  return (
    <div className={`bg-[#F7F8FD] px-5 lg:col-start-2 lg:col-end-4`}>
      <div className="container mx-auto py-10 space-y-5 lg:py-5">
        {data ? <FeedbackCard data={data} /> : <FeedBackError />}
      </div>
    </div>
  );
}

export default Feedback;
