import React from "react";

function FeedbackUsers({ data }: any) {
  interface Comments {
    id: number;
    content: string;
    replies: [];
    replyingTo: string;
    user: {
      image: string;
      name: string;
      username: string;
    };
  }
  return (
    <>
      {data &&
        data.map((items: Comments) => (
          <React.Fragment key={items.id}>
            <div className="space-y-5">
              <div className="flex items-center gap-5">
                <img
                  src={`/public${items.user.image.replace(
                    "./assets",
                    "/assets"
                  )}`}
                  className="rounded-full w-14"
                />
                <div>
                  <p className="font-bold">{items.user.name}</p>
                  <p className="text-gray-500">@{items.user.username}</p>
                </div>
                <button className="grow text-right p-5 text-blue-500 font-bold">
                  Reply
                </button>
              </div>
              <div>
                <p className="text-gray-500">
                  <span className="text-blue-500 font-bold">
                    {items.replyingTo ? `@${items.replyingTo} ` : " "}
                  </span>
                  {items.content}
                </p>
              </div>
            </div>
          </React.Fragment>
        ))}
    </>
  );
}

export default FeedbackUsers;
