import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./styles/global.css";
import App from "./App.tsx";
import Dashboard from "./components/Dashboard.tsx";
import NotFoundPage from "./NotFoundPage.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    Component: App,
    children: [
      {
        index: true,
        element: <Dashboard viewMode="active" title="Active Bounties" />,
      },
      {
        path: "history",
        element: <Dashboard viewMode="history" title="History" />,
      },
      {
        path: "stats",
        element: <Dashboard viewMode="stats" title="Statistics" />,
      },
    ],
  },
  {
    path: "*",
    Component: NotFoundPage,
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);
