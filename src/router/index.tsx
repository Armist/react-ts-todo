import { createBrowserRouter } from "react-router-dom";
import { ErrorPage } from "../pages/ErrorPage";
import { Login } from "../pages/Login";
import { DefaultLayout } from "./layouts/DefaultLayout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <DefaultLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "login",
        element: <Login />,
      },
    ],
  },
]);

export default router;
