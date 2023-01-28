import React from "react";
import { Route, Routes } from "react-router-dom";

const ConnectedCanvas = React.lazy(
  () => import("./pages/canvas/connector")
);


const AppRoutes = () => {
  return (
    <Routes>
        <Route
          path="/*"
          element={
            <React.Suspense fallback={<>...</>}>
              <ConnectedCanvas />
            </React.Suspense>
          }
        />
    </Routes>
  );
};

export default AppRoutes;
