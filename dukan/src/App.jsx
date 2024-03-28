import { Suspense } from "react";
import RoutesWithNotFound from "./utilities/RoutesWithNotFound";
import { BrowserRouter, Route } from "react-router-dom";
import Navbar from "./component/Navbar";
import { Home } from "./Pages/Public/index.jsx";
import { PublicRoutes } from "./models/routes.js";
import Footer from "./component/Footer.jsx";

function App() {
  return (
    <>
      <Suspense fallback={<div>Loading...</div>}>
        <BrowserRouter>
          <Navbar />
          <RoutesWithNotFound>
            <Route path={PublicRoutes.HOME} element={<Home />} />
          </RoutesWithNotFound>
          <Footer />
        </BrowserRouter>
      </Suspense>
    </>
  );
}

export default App;
