import "./index.css";

import { StrictMode } from "react";

import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router";
import { createBrowserRouter } from "react-router-dom";

import App from "./App.jsx";
import Header from "./components/custom/Header";
import CreateTrip from "./create-trip";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/create-trip",
    element: <CreateTrip />,
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Header />
    <RouterProvider router={router} />
  </StrictMode>,
);
