import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Layout from "components/layout";
import Index from "./home";
import NoMatch from "./no-match";

const routes = [
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <Index /> },
      {
        path: "/courses",
        lazy: () => import("./course")
      },
      { path: "*", element: <NoMatch /> }
    ]
  }
];

const router = createBrowserRouter(routes);

export default router;
