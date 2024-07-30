import { useQuery } from "@tanstack/react-query";
import FeedBackError from "./FeedBackError";
import FeedbackCard from "./FeedbackCard";
import axios from "axios";

function Feedback() {
  interface Suggestions {
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
    queryFn: async function getSuggestions() {
      try {
        const response = await axios.get(
          "http://127.0.0.1:8000/product-requests/"
        );
        const data: Suggestions[] = response.data;
        console.log(data);
        return data;
      } catch (error) {
        console.log(error);
      }
    },
  });
  return (
    <div className="bg-gray-200 px-5 py-10 space-y-10">
      {isPending && <h1>Loading data...</h1>}
      {isError && <FeedBackError />}
      <FeedbackCard data={data} />
    </div>
  );
}

export default Feedback;
