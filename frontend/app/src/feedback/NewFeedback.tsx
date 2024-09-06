import { Link } from "react-router-dom";
import { useForm, SubmitHandler } from "react-hook-form";
import { useMutation } from "@tanstack/react-query";
import axios from "axios";

function NewFeedback() {
  interface NewFeedback {
    title: string;
    category: string;
    description: string;
    upvotes: number;
    status: string;
  }
  const mutation = useMutation({
    mutationFn: (data: NewFeedback) => {
      return axios.post("http://127.0.0.1:8000/product-requests/", data);
    },
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<NewFeedback>();
  const onSubmit: SubmitHandler<NewFeedback> = (data) => {
    const defaultData = { upvotes: 0, status: "suggestion" };
    const newFeedback = { ...data, ...defaultData };

    mutation.mutate(newFeedback);
    console.log(newFeedback);
  };
  return (
    <div className="px-5 py-10 space-y-10 max-w-[540px] mx-auto">
      <div className="flex items-center gap-5">
        <img src="/public/assets/shared/icon-arrow-left.svg" />
        <Link to={"/"} className="text-gray-500 font-bold">
          Go Back
        </Link>
      </div>

      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="bg-white p-10 rounded-lg space-y-5">
          <h1 className="font-bold text-2xl">Create New Feedback</h1>
          <div>
            <h2 className="font-bold mb-1">Feedback Title</h2>
            <label className="mb-5 text-gray-500 block" htmlFor="title">
              Add a short, descriptive headline
            </label>
            <input
              className={`bg-[#F7F8FD] p-5 cursor-pointer text-gray-800 w-full rounded-lg focus:bg-gray-200 invalid:outline-red-500`}
              id="title"
              aria-invalid={errors.title ? "true" : "false"}
              required
              {...register("title")}
            />
          </div>

          <div>
            <h2 className="font-bold mb-1">Category</h2>
            <label className="mb-5 text-gray-500 block" htmlFor="category">
              Choose a category for your feedback
            </label>
            <select
              className="bg-[#F7F8FD] p-5 cursor-pointer text-gray-800 w-full rounded-lg border-r-8 border-transparent"
              id="category"
              {...register("category")}
            >
              <option value={"Feature"}>Feature</option>
              <option value={"UI"}>UI</option>
              <option value={"UX"}>UX</option>
              <option value={"Enhancement"}>Enhancement</option>
              <option value={"Bug"}>Bug</option>
            </select>
          </div>

          <div>
            <h2 className="font-bold mb-1">Feedback Detail</h2>
            <label className="mb-5 text-gray-500 block" htmlFor="details">
              Include any specific comments on what should be improved, added,
              etc.
            </label>
            <textarea
              className="bg-[#F7F8FD] p-5 cursor-pointer text-gray-800 w-full rounded-lg focus:bg-gray-200 invalid:outline-red-500"
              id="details"
              required
              {...register("description")}
            ></textarea>
          </div>

          <div className="space-y-5 md:flex md:flex-row-reverse md:items-center md:space-y-0 md:gap-5">
            <button className="bg-blue-500 px-4 py-3 rounded-lg font-semibold tracking-wide text-white w-full md:w-auto text-sm hover:bg-[#C75AF6]">
              Add Feedback
            </button>
            <button className="bg-blue-950 px-4 py-3 rounded-lg font-semibold tracking-wide text-white w-full md:w-auto text-sm hover:bg-[#656EA3]">
              Cancel
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default NewFeedback;
