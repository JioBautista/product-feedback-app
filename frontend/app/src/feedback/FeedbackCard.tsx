import { Link } from "react-router-dom";
import React from "react";

function FeedbackCard({ data }) {
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
      {data &&
        data.map((items: Data) => (
          <React.Fragment key={items.id}>
            <div className="bg-white p-5 rounded-lg space-y-3">
              <Link className="block" to={`/${items.id}`}>
                <h1 className="font-bold hover:text-blue-500">{items.title}</h1>
              </Link>
              <p className="text-gray-500">{items.description}</p>
              <span className="bg-blue-100 text-blue-500 font-bold px-5 py-2 rounded-lg inline-block">
                {items.category.charAt(0).toUpperCase() +
                  items.category.slice(1)}
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
          </React.Fragment>
        ))}
    </>
  );
}

export default FeedbackCard;
