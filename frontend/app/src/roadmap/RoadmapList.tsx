function RoadmapList({ data }: any) {
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
      <div className="bg-[#F7F8FD] p-5 space-y-5">
        <div>
          <h1 className="font-bold text-xl">
            {data && data[0].status} ({data?.length})
          </h1>
          <p className="text-gray-500">Features currently being developed</p>
        </div>
        {data?.map((items: Data) => (
          <div
            className="bg-white p-8 rounded-lg space-y-3 border-t-8 border-[#AD1FEA]"
            key={items.id}
          >
            <h1 className="font-bold hover:text-blue-500">{items.title}</h1>
            <p className="text-gray-500">{items.description}</p>
            <span className="bg-blue-100 text-blue-500 font-bold px-5 py-2 rounded-lg inline-block">
              {items.category}
            </span>
            <div className="flex justify-between items-center">
              <button className="bg-blue-100 font-bold px-5 py-2 rounded-lg flex items-center gap-2 hover:bg-purple-300">
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
      </div>
    </>
  );
}

export default RoadmapList;
