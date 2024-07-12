import React from "react";
import { useQuery } from "@tanstack/react-query";
import FeedBackError from "./FeedBackError";
import axios from "axios";

function Feedback() {
  interface Suggestions {
    id: number;
    title: string;
    category: string;
    upvotes: number;
    status: string;
    description: string;
  }

  const { isPending, isError, data } = useQuery({
    queryKey: ["feedbacks"],
    queryFn: async function getSuggestions() {
      try {
        const response = await axios.get(
          "http://127.0.0.1:8000/product-requests/"
        );
        const data = response.data;
        return data;
      } catch (error) {
        console.log(error);
      }
    },
  });
  const suggestionsData: Suggestions[] = data;
  console.log(suggestionsData);
  return (
    <div className="bg-gray-500 px-5 py-10 space-y-10">
      {isPending && <h1>Loading data...</h1>}
      {isError && <FeedBackError />}
      {suggestionsData &&
        suggestionsData.map((items) => (
          <React.Fragment key={items.id}>
            <div className="bg-white p-5 rounded-lg">
              <h1 className="font-bold">{items.title}</h1>
              <p className="text-gray-500">{items.description}</p>
              <p className="bg-blue-200 text-blue-500 font-bold p-2 rounded-lg">
                {items.category}
              </p>
              <p className="bg-blue-200 text-blue-500 font-bold p-2 rounded-lg">
                {items.upvotes}
              </p>
            </div>
          </React.Fragment>
        ))}
    </div>
  );
}

export default Feedback;
