import { Suspense } from "react";
import RoutesWithNotFound from "./utilities/RoutesWithNotFound";
import { BrowserRouter, Route } from "react-router-dom";
import Navbar from "./component/Navbar";
import { Home } from "./Pages";
import { PublicRoutes } from "./models/routes.js";

function App() {
  return (
    <>
      <Suspense fallback={<div>Loading...</div>}>
        <BrowserRouter>
          <Navbar />
          <RoutesWithNotFound>
            <Route path={PublicRoutes.HOME} element={<Home />} />
          </RoutesWithNotFound>
        </BrowserRouter>
      </Suspense>
    </>
  );
}

export default App;
