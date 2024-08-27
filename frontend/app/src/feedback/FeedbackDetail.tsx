import { Link, useParams } from "react-router-dom";
import FeedbackComments from "./FeedbackComments";
import FeedbackCard from "./FeedbackCard";
import AddComment from "./AddComment";
import { useQuery } from "@tanstack/react-query";
import { fetchFeedbacks } from "../api/fetchFeedbacks";

function FeedbackDetail() {
  const { feedbackId } = useParams();
  const { data } = useQuery({
    queryKey: ["feedbacks"],
    queryFn: () => fetchFeedbacks(`http://127.0.0.1:8000/product-requests/`),
    staleTime: 120000,
  });

  const feedbackDetails = data?.filter(
    (item) => item.id === parseInt(feedbackId as string)
  );

  return (
    <div className="px-5 py-10 bg-[#F7F8FD] space-y-5 md:px-10 max-w-[730px] mx-auto">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-5">
          <img src="/public/assets/shared/icon-arrow-left.svg" />
          <Link to={"/"} className="text-gray-500 font-bold">
            Go Back
          </Link>
        </div>
        <Link className="block" to={`/edit/${feedbackId}`}>
          <button className="bg-blue-500 px-6 py-4 rounded-xl font-semibold tracking-wide text-white lg:py-3 lg:px-5 text-sm hover:bg-[#C75AF6]">
            Edit Feedback
          </button>
        </Link>
      </div>

      {/* FeedbackCard is a component where certain styles are reused in other pages ex: In Feedback component */}
      <FeedbackCard data={feedbackDetails} />

      {/* FeedbackComments is a component where the users are rendered for the comment section of FeedbackDetail component */}
      <FeedbackComments data={feedbackDetails} />

      {/* AddComment component is for the current user to add comments for the FeedbackDetail component */}
      <AddComment />
    </div>
  );
}

export default FeedbackDetail;
