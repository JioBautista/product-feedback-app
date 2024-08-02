import { Link } from "react-router-dom";
function NewFeedback() {
  return (
    <div className="px-5 py-10 bg-gray-200 space-y-10 h-screen">
      <div className="flex items-center gap-5">
        <img src="/public/assets/shared/icon-arrow-left.svg" />
        <Link to={"/"} className="text-gray-500 font-bold">
          Go Back
        </Link>
      </div>

      <div className="bg-white p-10 rounded-lg space-y-5">
        <h1 className="font-bold text-2xl">Create New Feedback</h1>
        <div>
          <h2 className="font-bold mb-1">Feedback Title</h2>
          <label className="mb-5 text-gray-500 block" htmlFor="title">
            Add a short, descriptive headline
          </label>
          <input
            className="bg-gray-300 p-5 cursor-pointer text-gray-800 w-full rounded-lg focus:bg-gray-200"
            id="title"
            name="title"
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
          >
            <option value={"Feature"}>Feature</option>
            <option value={"UI"}>UI</option>
            <option value={"UX"}>UX</option>
            <option value={"Enhancement"}>Enhancement</option>
            <option value={"Bug"}>Bug</option>
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
          ></textarea>
        </div>
        <button className="bg-blue-500 px-6 py-4 rounded-lg font-semibold tracking-wide text-white w-full">
          Add Feedback
        </button>
        <button className="bg-blue-950 px-6 py-4 rounded-lg font-semibold tracking-wide text-white w-full">
          Cancel
        </button>
      </div>
    </div>
  );
}

export default NewFeedback;
