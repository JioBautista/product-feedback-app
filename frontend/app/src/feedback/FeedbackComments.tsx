import React from "react";

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
    <div className="bg-white rounded-md p-5">
      <h1 className="text-xl font-bold">
        {comments ? comments.length : "0"} Comments
      </h1>
      <div className="space-y-10">
        {comments &&
          comments.map((items) => (
            <React.Fragment key={items.id}>
              <div className="bg-blue-200">
                <div className="flex items-center gap-5">
                  <img
                    src={`/public${items.user.image.replace(
                      "./assets",
                      "/assets"
                    )}`}
                  />
                  <div>
                    <p>{items.user.name}</p>
                    <p>@{items.user.username}</p>
                  </div>
                  <button className="grow">Reply</button>
                </div>
              </div>
            </React.Fragment>
          ))}
      </div>
    </div>
  );
}

export default FeedbackComments;
