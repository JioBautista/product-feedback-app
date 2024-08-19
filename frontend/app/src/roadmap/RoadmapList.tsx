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

  return (
    <>
      {data?.map((items: Data) => (
        <div
          className={`bg-white p-6 rounded-lg border-t-8 mb-5 ${border} md:p-4 flex flex-col items-start justify-between gap-2 lg:p-6`}
          key={items.id}
        >
          <h1 className="font-semibold hover:text-blue-500">{items.title}</h1>
          <p className="text-gray-500">{items.description}</p>
          <span className="bg-blue-100 text-blue-500 font-semibold px-5 py-2 rounded-xl inline-block">
            {items.category}
          </span>
          <div className="flex justify-between items-center w-full">
            <button className="bg-blue-100 font-semibold px-5 py-2 rounded-xl flex items-center gap-2 hover:bg-purple-300">
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
