import { Link } from "react-router-dom";
function NewFeedback() {
  return (
    <div className="px-5 py-10 bg-gray-200 space-y-10">
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
          <p className="mb-5 text-gray-500">
            Add a short, descriptive headline
          </p>
          <input className="bg-gray-300 p-5 cursor-pointer text-gray-800 w-full rounded-lg focus:bg-gray-200" />
        </div>
        <div>
          <h2 className="font-bold mb-1">Category</h2>
          <label className="mb-5 text-gray-500 block" htmlFor="category">
            Choose a category for your feedback
          </label>
          <select
            name="category"
            id="category"
            className="bg-gray-300 p-5 cursor-pointer text-gray-800 w-full rounded-lg"
          >
            <option value={"Feature"}>Feature</option>
            <option value={"UI"}>UI</option>
            <option value={"UX"}>UX</option>
            <option value={"Enhancement"}>Enhancement</option>
            <option value={"Bug"}>Bug</option>
          </select>
        </div>
      </div>
    </div>
  );
}

export default NewFeedback;
