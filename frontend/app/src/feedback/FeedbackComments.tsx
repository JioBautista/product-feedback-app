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
  console.log(comments);
  return (
    <div className="bg-white rounded-md p-8 space-y-10">
      <h1 className="text-xl font-bold">
        {comments ? comments.length : "0"} Comments
      </h1>
      <div className="space-y-10">
        <FeedbackUsers data={comments} />
        <div className="pl-6 space-y-10 border-l-2">
          {comments &&
            comments.map((items) => (
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
