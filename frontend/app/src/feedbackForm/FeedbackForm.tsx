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
    mutationFn: (data: NewFeedback) => {
      return axios.post("http://127.0.0.1:8000/product-requests/", data);
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
        >
          <option value={"Feature"} defaultValue={data?.category}>
            Feature
          </option>
          <option
            value={"UI"}
            selected={data?.category ? data.category === "UI" : false}
          >
            UI
          </option>
          <option
            value={"UX"}
            selected={data?.category ? data.category === "UX" : false}
          >
            UX
          </option>
          <option
            value={"Enhancement"}
            selected={data?.category ? data.category === "enhancement" : false}
          >
            Enhancement
          </option>
          <option
            value={"Bug"}
            selected={data?.category ? data.category === "bug" : false}
          >
            Bug
          </option>
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
