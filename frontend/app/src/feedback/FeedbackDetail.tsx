import React from "react";
import { Link, useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { fetchFeedbacks } from "../api/fetchFeedbacks";
import FeedBackError from "./FeedBackError";
import FeedbackComments from "./FeedbackComments";
import FeedbackCard from "./FeedbackCard";
import AddComment from "./AddComment";

function FeedbackDetail() {
  const { feedbackId } = useParams();
  const { isPending, isError, data } = useQuery({
    queryKey: ["feedbacks"],
    queryFn: () => fetchFeedbacks("http://127.0.0.1:8000/product-requests/"),
    staleTime: 120000,
  });

  const feedbackDetails = data?.filter(
    (item) => item.id === parseInt(feedbackId as string)
  );
  return (
    <React.Fragment>
      <div className="px-5 py-10 bg-gray-200 space-y-5">
        {isPending && <h1>Loading data...</h1>}
        {isError && <FeedBackError />}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-5">
            <img src="/public/assets/shared/icon-arrow-left.svg" />
            <Link to={"/"} className="text-gray-500 font-bold">
              Go Back
            </Link>
          </div>
          <Link className="block" to={`/edit/${feedbackId}`}>
            <button className="bg-blue-500 px-6 py-4 rounded-xl font-semibold tracking-wide text-white">
              Edit Feedback
            </button>
          </Link>
        </div>
        <FeedbackCard data={feedbackDetails} />
        <FeedbackComments data={feedbackDetails} />
        <AddComment />
      </div>
    </React.Fragment>
  );
}

export default FeedbackDetail;
