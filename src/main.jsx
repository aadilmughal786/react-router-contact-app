import React from "react";
import ReactDOM from "react-dom/client";
import Root, {
  action as rootAction,
  loader as rootLoader,
} from "./routes/root";
import "./styles/global.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import NotFound from "./components/not-found";
import Contact, {
  action as contactAction,
  loader as contactLoader,
} from "./routes/contact";
import EditContact, {
  action as editAction,
  loader as editLoader,
} from "./routes/edit";
import { action as destroyAction } from "./routes/destory";
import Index from "./routes";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <NotFound />,
    loader: rootLoader,
    action: rootAction,
    children: [
      {
        errorElement: <NotFound />,
        children: [
          {
            index: true,
            element: <Index />,
          },
          {
            path: "/contacts/:contactId",
            element: <Contact />,
            loader: contactLoader,
            action: contactAction,
          },
          {
            path: "contacts/:contactId/edit",
            element: <EditContact />,
            loader: editLoader,
            action: editAction,
          },
          {
            path: "contacts/:contactId/destroy",
            action: destroyAction,
            errorElement: <div>Oops! Got ERROR during removial</div>,
          },
        ],
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
