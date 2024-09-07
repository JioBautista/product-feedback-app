import { Link } from "react-router-dom";
import FeedbackForm from "../feedbackForm/FeedbackForm";

function NewFeedback() {
  return (
    <div className="px-5 py-10 space-y-10 max-w-[540px] mx-auto">
      <div className="flex items-center gap-5">
        <img src="/public/assets/shared/icon-arrow-left.svg" />
        <Link to={"/"} className="text-gray-500 font-bold">
          Go Back
        </Link>
      </div>

      <div className="bg-white p-10 rounded-lg">
        <FeedbackForm>
          <div className="space-y-5 md:flex md:flex-row-reverse md:items-center md:space-y-0 md:gap-5 mt-3">
            <button
              className="bg-blue-500 px-4 py-3 rounded-lg font-semibold tracking-wide text-white w-full md:w-auto text-sm hover:bg-[#C75AF6]"
              type="submit"
            >
              Add Feedback
            </button>
            <button className="bg-blue-950 px-4 py-3 rounded-lg font-semibold tracking-wide text-white w-full md:w-auto text-sm hover:bg-[#656EA3]">
              Cancel
            </button>
          </div>
        </FeedbackForm>
      </div>
    </div>
  );
}

export default NewFeedback;
