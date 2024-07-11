function FeedBackError() {
  return (
    <>
      <div className="bg-white rounded-lg px-8 py-24 flex flex-col items-center gap-5 text-center">
        <img
          src="/public/assets/suggestions/illustration-empty.svg"
          className="block"
        />
        <h1 className="font-bold">There is no feedback yet.</h1>
        <p className="text-gray-500">
          Got a suggestion? Found a bug that needs to be squashed? We love
          hearing about new ideas to improve our app.
        </p>
        <button className="bg-blue-500 px-3 py-2 rounded-xl font-semibold tracking-wide text-white">
          + Add Feedback
        </button>
      </div>
    </>
  );
}

export default FeedBackError;
