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
          className={`bg-white p-8 rounded-lg space-y-3 border-t-8 mb-5 ${border} md:p-3 h-[250px]`}
          key={items.id}
        >
          <h1 className="font-bold hover:text-blue-500 md:text-sm">
            {items.title}
          </h1>
          <p className="text-gray-500 md:text-sm">{items.description}</p>
          <span className="bg-blue-100 text-blue-500 font-bold px-5 py-2 rounded-lg inline-block md:text-sm">
            {items.category}
          </span>
          <div className="flex justify-between items-center">
            <button className="bg-blue-100 font-bold px-5 py-2 rounded-lg flex items-center gap-2 hover:bg-purple-300 md:text-sm">
              <img src="/public/assets/shared/icon-arrow-up.svg" />
              {items.upvotes}
            </button>

            <div className="flex items-center gap-2">
              <img src="/public/assets/shared/icon-comments.svg" />
              <p className="font-bold text-lg">{items.comments.length}</p>
            </div>
          </div>
        </div>
      ))}
    </>
  );
}

export default RoadmapList;
