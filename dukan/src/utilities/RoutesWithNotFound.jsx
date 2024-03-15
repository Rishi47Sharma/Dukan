import { Route, Routes } from "react-router-dom";

// eslint-disable-next-line react/prop-types
function RoutesWithNotFound({ children }) {
  return (
    <Routes>
      {children}
      <Route path="*" element={<h1>Not Found</h1>} />
    </Routes>
  );
}

export default RoutesWithNotFound;
