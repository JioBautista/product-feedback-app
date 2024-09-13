import { useParams } from "react-router-dom";
import { useMutation } from "@tanstack/react-query";
import { useForm, SubmitHandler } from "react-hook-form";
import axios from "axios";

function AddComment() {
  const { feedbackId } = useParams();

  const mutation = useMutation({
    mutationFn: async (data) => {
      return axios
        .patch(`http://127.0.0.1:8000/product-requests/${feedbackId}/`, data)
        .then((res) => {
          console.log(res);
        })
        .catch((err) => {
          console.log(err);
        });
    },
  });
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
        <button className="bg-blue-500 px-6 py-4 rounded-lg font-semibold tracking-wide text-white text-sm hover:bg-[#C75AF6]">
          Post Comment
        </button>
      </div>
    </div>
  );
}

export default AddComment;
