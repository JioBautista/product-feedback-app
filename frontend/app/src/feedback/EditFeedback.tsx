import { Link, useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { fetchFeedbacks } from "../api/fetchFeedbacks";
import EditFeedbackForm from "../feedbackForm/EditFeedbackForm";

function EditFeedback() {
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
  const { data }: Data | Error | any = useQuery({
    queryKey: ["editFeedback", feedbackId],
    queryFn: () =>
      fetchFeedbacks(`http://127.0.0.1:8000/product-requests/${feedbackId}`),
    staleTime: 120000,
  });
  console.log(data);
  return (
    <div className="px-5 py-10 space-y-10 max-w-[540px] mx-auto">
      <div className="flex items-center gap-5">
        <img src="/public/assets/shared/icon-arrow-left.svg" />
        <Link to={"/"} className="text-gray-500 font-bold">
          Go Back
        </Link>
      </div>

      <div className="bg-white p-10 rounded-lg">
        <EditFeedbackForm>
          <div className="space-y-5 md:grid-cols-3 md:grid md:space-y-0 md:items-center mt-3">
            <button className="bg-blue-500 py-3 px-4 rounded-lg font-semibold tracking-wide text-white w-full md:order-last md:justify-self-end md:w-auto text-sm hover:bg-[#C75AF6]">
              Save Changes
            </button>
            <button className="bg-blue-950 py-3 px-4 rounded-lg font-semibold tracking-wide text-white w-full md:w-auto md:justify-self-end text-sm hover:bg-[#656EA3]">
              Cancel
            </button>
            <button className="bg-red-500 py-3 px-4 rounded-lg font-semibold tracking-wide text-white w-full md:order-first md:w-auto md:justify-self-start text-sm hover:bg-[#E98888]">
              Delete
            </button>
          </div>
        </EditFeedbackForm>
      </div>
    </div>
  );
}

export default EditFeedback;
