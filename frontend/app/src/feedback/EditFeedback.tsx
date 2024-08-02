import { Link, useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { fetchFeedbacks } from "../api/fetchFeedbacks";
function EditFeedback() {
  interface Data {
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
    queryFn: () => fetchFeedbacks("http://127.0.0.1:8000/product-requests/"),
    staleTime: 120000,
  });

  const feedbackDetails: Data[] | undefined =
    data && data.filter((item) => item.id === parseInt(feedbackId as string));
  return (
    <div className="px-5 py-10 bg-gray-200 space-y-10 h-full">
      <div className="flex items-center gap-5">
        <img src="/public/assets/shared/icon-arrow-left.svg" />
        <Link to={"/"} className="text-gray-500 font-bold">
          Go Back
        </Link>
      </div>

      <div className="bg-white p-10 rounded-lg space-y-5">
        <h1 className="font-bold text-2xl">{`Editing '${
          feedbackDetails && feedbackDetails[0].title
        }'`}</h1>
        <div>
          <h2 className="font-bold mb-1">Feedback Title</h2>
          <label className="mb-5 text-gray-500 block" htmlFor="title">
            Add a short, descriptive headline
          </label>
          <input
            className="bg-gray-300 p-5 cursor-pointer text-gray-800 w-full rounded-lg focus:bg-gray-200"
            id="title"
            name="title"
            defaultValue={feedbackDetails && feedbackDetails[0].title}
          />
        </div>

        <div>
          <h2 className="font-bold mb-1">Category</h2>
          <label className="mb-5 text-gray-500 block" htmlFor="category">
            Choose a category for your feedback
          </label>
          <select
            name="category"
            id="category"
            className="bg-gray-300 p-5 cursor-pointer text-gray-800 w-full rounded-lg border-r-8 border-transparent"
            defaultValue={feedbackDetails && feedbackDetails[0].category}
          >
            <option value={"Feature"}>Feature</option>
            <option value={"UI"}>UI</option>
            <option value={"UX"}>UX</option>
            <option value={"Enhancement"}>Enhancement</option>
            <option value={"Bug"}>Bug</option>
          </select>
        </div>

        <div>
          <h2 className="font-bold mb-1">Update Status</h2>
          <label className="mb-5 text-gray-500 block" htmlFor="category">
            Change feature state
          </label>
          <select
            name="category"
            id="category"
            className="bg-gray-300 p-5 cursor-pointer text-gray-800 w-full rounded-lg border-r-8 border-transparent"
            defaultValue={feedbackDetails && feedbackDetails[0].status}
          >
            <option value={"Suggestion"}>Suggestion</option>
            <option value={"Planed"}>Planned</option>
            <option value={"In-Progress"}>In-Progress</option>
            <option value={"Live"}>Live</option>
          </select>
        </div>

        <div>
          <h2 className="font-bold mb-1">Feedback Detail</h2>
          <label className="mb-5 text-gray-500 block" htmlFor="details">
            Include any specific comments on what should be inporved, added,
            etc.
          </label>
          <textarea
            className="bg-gray-300 p-5 cursor-pointer text-gray-800 w-full rounded-lg focus:bg-gray-200"
            name="details"
            id="details"
            rows={5}
            defaultValue={feedbackDetails && feedbackDetails[0].description}
          ></textarea>
        </div>
        <button className="bg-blue-500 px-6 py-4 rounded-lg font-semibold tracking-wide text-white w-full">
          Save Changes
        </button>
        <button className="bg-blue-950 px-6 py-4 rounded-lg font-semibold tracking-wide text-white w-full">
          Cancel
        </button>
        <button className="bg-red-500 px-6 py-4 rounded-lg font-semibold tracking-wide text-white w-full">
          Delete
        </button>
      </div>
    </div>
  );
}

export default EditFeedback;
