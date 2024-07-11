import { useQuery } from "@tanstack/react-query";
import FeedBackError from "./FeedBackError";

function Feedback() {
  const { isPending, isError, data } = useQuery({
    queryKey: ["feedbacks"],
  });
  return (
    <div className="bg-gray-100 px-5 py-10">
      {isPending && <h1>Loading data...</h1>}
      {isError && <FeedBackError />}
    </div>
  );
}

export default Feedback;
