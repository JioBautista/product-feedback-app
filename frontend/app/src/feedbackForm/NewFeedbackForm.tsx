import { useForm, SubmitHandler } from "react-hook-form";
import { useMutation } from "@tanstack/react-query";
import axios from "axios";

function NewFeedbackForm({ children }: any) {
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
    const defaultData = { upvotes: 0, status: "suggestion", comments: {} };
    const newFeedback = { ...data, ...defaultData };

    mutation.mutate(newFeedback);
    console.log(newFeedback);
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <h1 className="font-bold text-2xl">Create New Feedback</h1>
      <div className="mb-3">
        <h2 className="font-bold">Feedback Title</h2>
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

      <div className="mb-3">
        <h2 className="font-bold">Category</h2>
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
        <h2 className="font-bold">Feedback Detail</h2>
        <label className="mb-5 text-gray-500 block" htmlFor="details">
          Include any specific comments on what should be improved, added, etc.
        </label>
        <textarea
          className="bg-[#F7F8FD] p-5 cursor-pointer text-gray-800 w-full rounded-lg focus:bg-gray-200 invalid:outline-red-500"
          id="details"
          required
          {...register("description")}
        ></textarea>
      </div>
      {children}
    </form>
  );
}

export default NewFeedbackForm;
