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

  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    const currentUser = {
      id: 1,
      image: "./assets/user-images/image-zena.jpg",
      name: "Zena Kelley",
      username: "velvetround",
    };
    const commentData = { user: currentUser, ...data, replies: [] };
    const commentField = { comments: commentData };
    mutation.mutate(commentField);
    console.log(commentField);
  };
  return (
    <div className="bg-white p-5 rounded-lg lg:p-8">
      <form onSubmit={handleSubmit(onSubmit)}>
        <h1 className="text-lg font-semibold tracking-wide mb-5">
          Add Comment
        </h1>
        <textarea
          className="bg-[#F7F8FD] p-5 cursor-pointer text-gray-500 w-full rounded-lg mb-5"
          placeholder="Type your comment here"
          maxLength={250}
          {...register("content")}
        ></textarea>
        <div className="flex items-center justify-between">
          <p className="text-gray-500">250 characters left</p>
          <button
            className="bg-blue-500 px-6 py-4 rounded-lg font-semibold tracking-wide text-white text-sm hover:bg-[#C75AF6]"
            type="submit"
          >
            Post Comment
          </button>
        </div>
      </form>
    </div>
  );
}

export default AddComment;
