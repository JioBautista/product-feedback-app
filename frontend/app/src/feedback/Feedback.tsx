import FeedBackError from "./FeedBackError";
import FeedbackCard from "./FeedbackCard";
import { useQuery } from "@tanstack/react-query";
import { fetchFeedbacks } from "../api/fetchFeedbacks";
import { useStore } from "../store/useStore";

function Feedback() {
  const filter = useStore((state) => state.filter);
  const sort = useStore((state) => state.sort);
  const { data } = useQuery({
    queryKey: ["feedbacks"],
    queryFn: () => fetchFeedbacks("http://127.0.0.1:8000/product-requests/"),
    staleTime: 120000,
  });

  const filteredData = data?.filter(
    (items) => items.category === filter || filter === null
  );

  if (sort === "Most Upvotes") {
    filteredData?.sort((a, b) => b.upvotes - a.upvotes);
  } else if (sort === "Least Upvotes") {
    filteredData?.sort((a, b) => a.upvotes - b.upvotes);
  } else if (sort === "Most Comments") {
    filteredData?.sort((a, b) => b.comments.length - a.comments.length);
  } else if (sort === "Least Comments") {
    filteredData?.sort((a, b) => a.comments.length - b.comments.length);
  }
  console.log(filteredData);
  return (
    <div className={`bg-[#F7F8FD] px-5 lg:col-start-2 lg:col-end-4`}>
      <div className="container mx-auto py-10 space-y-5 lg:py-5">
        {filteredData ? (
          <FeedbackCard data={filteredData} />
        ) : (
          <FeedBackError />
        )}
      </div>
    </div>
  );
}

export default Feedback;
