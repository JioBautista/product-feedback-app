import React from "react";
import { Link, useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import FeedBackError from "./FeedBackError";
import FeedbackComments from "./FeedbackComments";
import FeedbackCard from "./FeedbackCard";
import AddComment from "./AddComment";
import axios from "axios";

function FeedbackDetail() {
  interface FeedbackDetails {
    id: number;
    title: string;
    category: string;
    upvotes: number;
    status: string;
    description: string;
    comments: [];
  }
  const { feedbackId } = useParams();
  const { isPending, isError, data } = useQuery({
    queryKey: ["feedbacks"],
    queryFn: async function getSuggestions() {
      try {
        const response = await axios.get(
          "http://127.0.0.1:8000/product-requests/"
        );
        const data: FeedbackDetails[] = response.data.filter(
          (item: any) => item.id === parseInt(feedbackId as string)
        );
        return data;
      } catch (error) {
        console.log(error);
      }
    },
  });
  return (
    <React.Fragment>
      <div className="px-5 py-10 bg-gray-200 space-y-10 h-screen">
        {isPending && <h1>Loading data...</h1>}
        {isError && <FeedBackError />}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-5">
            <img src="/public/assets/shared/icon-arrow-left.svg" />
            <Link to={"/"} className="text-gray-500 font-bold">
              Go Back
            </Link>
          </div>
          <button className="bg-blue-500 px-6 py-4 rounded-xl font-semibold tracking-wide text-white">
            Edit Feedback
          </button>
        </div>
        <FeedbackCard data={data} />
        <FeedbackComments data={data} />
        <AddComment />
      </div>
    </React.Fragment>
  );
}

export default FeedbackDetail;
