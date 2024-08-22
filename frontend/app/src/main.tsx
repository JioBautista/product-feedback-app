import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import Feedback from "./feedback/Feedback.tsx";
import FeedbackDetail from "./feedback/FeedbackDetail.tsx";
import NewFeedback from "./feedback/NewFeedback.tsx";
import EditFeedback from "./feedback/EditFeedback.tsx";
import Roadmap from "./roadmap/Roadmap.tsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { fetchFeedbacks } from "./api/fetchFeedbacks.tsx";

const queryClient = new QueryClient();

try {
  const data = await queryClient.fetchQuery({
    queryKey: ["feedbacks"],
    queryFn: () => fetchFeedbacks("http://127.0.0.1:8000/product-requests/"),
    staleTime: 10000,
  });
  console.log(data);
} catch (error) {
  console.log(error);
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Feedback />,
      },
    ],
  },
  {
    path: "/:feedbackId",
    element: <FeedbackDetail />,
  },
  {
    path: "/new",
    element: <NewFeedback />,
  },
  {
    path: "/edit/:feedbackId",
    element: <EditFeedback />,
  },
  {
    path: "/roadmap",
    element: <Roadmap />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  </React.StrictMode>
);
