import React from "react";
function RoadmapList({ data, border }: any) {
  interface Data {
    id: number;
    title: string;
    category: string;
    upvotes: number;
    status: string;
    description: string;
    comments: [];
  }
  console.log(data);

  const [activeStyle, setStyle] = React.useState(null);
  return (
    <>
      {data?.map((items: Data) => (
        <div
          className={`bg-white p-6 rounded-lg border-t-8 mb-5 ${border} md:p-4 flex flex-col items-start justify-between gap-2 lg:p-6`}
          key={items.id}
        >
          <h1 className="font-semibold hover:text-blue-500 cursor-pointer">
            {items.title}
          </h1>
          <p className="text-gray-500">{items.description}</p>
          <span className="bg-[#F2F4FE] text-blue-500 font-semibold px-5 py-2 rounded-xl inline-block">
            {items.category}
          </span>
          <div className="flex justify-between items-center w-full">
            <button
              className={`${
                activeStyle === items.id
                  ? `bg-[#3A4374] text-white`
                  : `bg-[#F2F4FE]`
              } font-semibold px-5 py-2 rounded-xl flex items-center gap-2 hover:bg-purple-300`}
              onClick={() => setStyle(items.id)}
            >
              <img src="/public/assets/shared/icon-arrow-up.svg" />
              {items.upvotes}
            </button>

            <div className="flex items-center gap-2">
              <img src="/public/assets/shared/icon-comments.svg" />
              <p className="font-semibold">{items.comments.length}</p>
            </div>
          </div>
        </div>
      ))}
    </>
  );
}

export default RoadmapList;
