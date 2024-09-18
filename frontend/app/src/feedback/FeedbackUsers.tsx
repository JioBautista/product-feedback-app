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
      {data
        ? data.map((items: Comments) => (
            <React.Fragment key={items.id}>
              <div className={`space-y-1`} key={items.id}>
                {/*This is where the avatar image, user details and reply button are contained in this div element  */}
                <div className="flex items-center gap-5">
                  <img
                    src={`/public${items.user.image.replace(
                      "./assets",
                      "/assets"
                    )}`}
                    className="rounded-full w-14 lg:w-10"
                  />
                  <div>
                    <p className="font-semibold">{items.user.name}</p>
                    <p className="text-gray-500">@{items.user.username}</p>
                  </div>
                  <button className="grow text-right p-5 text-blue-500 font-semibold hover:underline">
                    Reply
                  </button>
                </div>

                {/* This is where the content of the user and who the user is replying to contains in this div element */}
                <div className={`md:pl-[4.6rem]`}>
                  <p className="text-gray-500">
                    <span className="text-blue-500 font-bold">
                      {items.replyingTo ? `@${items.replyingTo} ` : " "}
                    </span>
                    {items.content}
                  </p>
                </div>
              </div>
            </React.Fragment>
          ))
        : null}
    </>
  );
}

export default FeedbackUsers;
