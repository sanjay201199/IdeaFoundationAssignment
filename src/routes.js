import React from "react";
import { Route, Routes } from "react-router-dom";

export default function RedirectRoutes() {

  const News = React.lazy(() => import('./App'));


  return (
    <Routes>
      <Route path="/" element={<News />} />

    </Routes>
  );
}
