import React from "react";
import { Link } from "react-router-dom";

function FeedbackDetail() {
  return (
    <React.Fragment>
      <div className="px-5 py-10 bg-gray-200">
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
      </div>
    </React.Fragment>
  );
}

export default FeedbackDetail;
