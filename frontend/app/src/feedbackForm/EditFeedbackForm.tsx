import { useParams } from "react-router-dom";
import { useForm, SubmitHandler } from "react-hook-form";
import { useMutation, useQuery } from "@tanstack/react-query";
import { fetchFeedbacks } from "../api/fetchFeedbacks";
import axios from "axios";

function FeedbackForm({ children }) {
  interface NewFeedback {
    title: string;
    category: string;
    description: string;
    upvotes: number;
    status: string;
  }

  interface Data {
    id: number;
    title: string;
    category: string;
    upvotes: number;
    status: string;
    description: string;
    comments: [];
  }
  const { feedbackId } = useParams();

  const mutation = useMutation({
    mutationFn: async (data: NewFeedback) => {
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

  const { data }: Data | Error | any = useQuery({
    queryKey: ["editFeedback", feedbackId],
    queryFn: () =>
      fetchFeedbacks(`http://127.0.0.1:8000/product-requests/${feedbackId}`),
    staleTime: 120000,
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
    <form onSubmit={handleSubmit(onSubmit)}>
      <h1 className="font-bold text-2xl">
        {`${data?.title ? `Editing '${data.title}'` : "Create New Feedback"}`}
      </h1>
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
          defaultValue={data?.title ? data.title : null}
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
          defaultValue={data?.category}
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
          defaultValue={data?.description}
        ></textarea>
      </div>
      {children}
    </form>
  );
}

export default FeedbackForm;
