import React from "react";
import { Link, useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import FeedBackError from "./FeedBackError";
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
          (item: any) => item.id === parseInt(feedbackId)
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
        <>
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

          {data &&
            data.map((items) => (
              <React.Fragment key={items.id}>
                <div className="bg-white p-5 rounded-lg space-y-3 cursor-pointer">
                  <h1 className="font-bold hover:text-blue-500">
                    {items.title}
                  </h1>
                  <p className="text-gray-500">{items.description}</p>
                  <span className="bg-blue-100 text-blue-500 font-bold px-5 py-2 rounded-lg inline-block">
                    {items.category.charAt(0).toUpperCase() +
                      items.category.slice(1)}
                  </span>
                  <button className="bg-blue-100 font-bold px-5 py-2 rounded-lg flex items-center gap-2 hover:bg-purple-300">
                    <img src="/public/assets/shared/icon-arrow-up.svg" />
                    {items.upvotes}
                  </button>
                </div>
              </React.Fragment>
            ))}
        </>
        <AddComment />
      </div>
    </React.Fragment>
  );
}

export default FeedbackDetail;
