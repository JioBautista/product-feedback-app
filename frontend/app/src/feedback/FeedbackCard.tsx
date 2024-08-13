import { Link } from "react-router-dom";
import React from "react";

function FeedbackCard({ data }: any) {
  interface Data {
    id: number;
    title: string;
    category: string;
    upvotes: number;
    status: string;
    description: string;
    comments: [];
  }
  return (
    <>
      {data?.map((items: Data) => (
        <React.Fragment key={items.id}>
          <div className="bg-white p-8 rounded-lg w-full grid-cols-2 grid items-center gap-y-5 md:flex md:justify-between">
            <div className="col-span-2">
              <Link className="block" to={`/${items.id}`}>
                <h1 className="font-bold hover:text-blue-500">{items.title}</h1>
              </Link>
              <p className="text-gray-500 mb-3">{items.description}</p>
              <span className="bg-blue-100 text-blue-500 font-bold px-5 py-2 rounded-lg inline-block">
                {items.category.charAt(0).toUpperCase() +
                  items.category.slice(1)}
              </span>
            </div>

            <button className="bg-blue-100 font-bold px-5 py-2 rounded-lg flex items-center gap-2 hover:bg-purple-300 justify-self-start md:order-first md:flex-col md:p-3">
              <img src="/public/assets/shared/icon-arrow-up.svg" />
              {items.upvotes}
            </button>

            <div className="flex items-center gap-2 justify-self-end">
              <img src="/public/assets/shared/icon-comments.svg" />
              <p className="font-bold text-lg">{items.comments.length}</p>
            </div>
          </div>
        </React.Fragment>
      ))}
    </>
  );
}

export default FeedbackCard;
