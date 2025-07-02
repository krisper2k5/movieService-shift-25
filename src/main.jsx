import { createRoot } from "react-dom/client";
import { Route, Routes } from "react-router";

import "./scss/app.scss";

import MainPage from "./pages/MainPage";

createRoot(document.getElementById("root")).render(
  <>
    <MainPage></MainPage>
  </>
);
