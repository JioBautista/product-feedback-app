import { useQuery } from "@tanstack/react-query";
import FeedBackError from "./FeedBackError";
import FeedbackCard from "./FeedbackCard";
import { fetchFeedbacks } from "../api/fetchFeedbacks";

function Feedback() {
  const { isPending, isError, data } = useQuery({
    queryKey: ["feedbacks"],
    queryFn: () => fetchFeedbacks("http://127.0.0.1:8000/product-requests/"),
    staleTime: 120000,
  });

  return (
    <div className={`bg-[#F7F8FD] ${data ? "h-full" : "h-screen"} px-5`}>
      <div className="container mx-auto py-10 space-y-5">
        {isPending && <h1>Loading data...</h1>}
        {isError && <FeedBackError />}
        <FeedbackCard data={data} />
      </div>
    </div>
  );
}

export default Feedback;
