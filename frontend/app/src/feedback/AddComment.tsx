function AddComment() {
  return (
    <div className="bg-white p-5 rounded-lg lg:p-8">
      <h1 className="text-lg font-semibold tracking-wide mb-5">Add Comment</h1>
      <textarea
        className="bg-[#F7F8FD] p-5 cursor-pointer text-gray-500 w-full rounded-lg mb-5"
        placeholder="Type your comment here"
        maxLength={250}
      ></textarea>
      <div className="flex items-center justify-between">
        <p className="text-gray-500">250 characters left</p>
        <button className="bg-blue-500 px-6 py-4 rounded-lg font-semibold tracking-wide text-white text-sm">
          Post Comment
        </button>
      </div>
    </div>
  );
}

export default AddComment;
