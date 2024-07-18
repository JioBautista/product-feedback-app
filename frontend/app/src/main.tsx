import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import Feedback from "./feedback/Feedback.tsx";
import FeedbackDetail from "./feedback/FeedbackDetail.tsx";
import NewFeedback from "./feedback/NewFeedback.tsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

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
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  </React.StrictMode>
);
