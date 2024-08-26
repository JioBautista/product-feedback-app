import React from "react";
import FeedbackUsers from "./FeedbackUsers";

function FeedbackComments({ data }: any) {
  interface Comments {
    id: number;
    content: string;
    replies: [];
    user: {
      image: string;
      name: string;
      username: string;
    };
  }
  const comments: Comments[] = data && data[0].comments;
  return (
    <div className="bg-white rounded-md p-8 space-y-1">
      <h1 className="text-xl font-semibold">
        {comments ? comments.length : "0"} Comments
      </h1>
      <div className="space-y-10">
        <div className="space-y-10">
          <FeedbackUsers data={comments} />
        </div>
        <div className="pl-6 space-y-10 border-l-2">
          {comments?.map((items) => (
            <React.Fragment key={items.id}>
              <FeedbackUsers data={items.replies} />
            </React.Fragment>
          ))}
        </div>
      </div>
    </div>
  );
}

export default FeedbackComments;
