import { Link, useParams } from "react-router-dom";
import { useStore } from "../store/useStore";
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
  const feedbacksData = useStore((state) => state.data);

  const feedbackDetails: Data[] | undefined = feedbacksData?.filter(
    (item) => item.id === parseInt(feedbackId as string)
  );
  return (
    <div className="px-5 py-10 space-y-10 max-w-[540px] mx-auto">
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
            className="bg-[#F7F8FD] p-5 cursor-pointer text-gray-800 w-full rounded-lg focus:bg-gray-200"
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
            className="bg-[#F7F8FD] p-5 cursor-pointer text-gray-800 w-full rounded-lg border-r-8 border-transparent"
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
            className="bg-[#F7F8FD] p-5 cursor-pointer text-gray-800 w-full rounded-lg border-r-8 border-transparent"
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
            className="bg-[#F7F8FD] p-5 cursor-pointer text-gray-800 w-full rounded-lg focus:bg-gray-200"
            name="details"
            id="details"
            rows={5}
            defaultValue={feedbackDetails && feedbackDetails[0].description}
          ></textarea>
        </div>

        <div className="space-y-5 md:grid-cols-3 md:grid md:space-y-0 md:items-center">
          <button className="bg-blue-500 py-3 px-4 rounded-lg font-semibold tracking-wide text-white w-full md:order-last md:justify-self-end md:w-auto text-sm hover:bg-[#C75AF6]">
            Save Changes
          </button>
          <button className="bg-blue-950 py-3 px-4 rounded-lg font-semibold tracking-wide text-white w-full md:w-auto md:justify-self-end text-sm hover:bg-[#656EA3]">
            Cancel
          </button>
          <button className="bg-red-500 py-3 px-4 rounded-lg font-semibold tracking-wide text-white w-full md:order-first md:w-auto md:justify-self-start text-sm hover:bg-[#E98888]">
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}

export default EditFeedback;
