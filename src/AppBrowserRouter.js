import React, { lazy } from "react";
import { Suspense } from "react";
import { BrowserRouter, Outlet, Route, Routes } from "react-router-dom";

const SuspenseLayout = () => (
  <Suspense fallback={<p>please wait</p>}>
    <Outlet></Outlet>
  </Suspense>
);

function App() {
  const HomePage = lazy(() => import("./Pages/HomePage/HomePage"));
  const Redirect = lazy(() => import("./Pages/Redirect/Redirect"));
  const Header = lazy(() => import("./Layouts/Header/Header"));
  const Footer = lazy(() => import("./Layouts/Footer/Footer"));
  const TourPage = lazy(() => import("./Pages/TourPage/TourPage"));
  const AboutPage = lazy(() => import("./Pages/AboutUs/AbousUs"));

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SuspenseLayout></SuspenseLayout>}>
          <Route
            path="/"
            element={<Header color={"#fff"} boxShadow={"none"}></Header>}
          >
            <Route path="/" element={<Footer></Footer>}>
              <Route path="/" element={<HomePage></HomePage>}>
                <Route
                  path="/Home/ResetPassword"
                  element={<Redirect></Redirect>}
                ></Route>
              </Route>
              <Route path="/About" element={<AboutPage></AboutPage>}></Route>
            </Route>
          </Route>

          <Route
            path="/"
            element={
              <Header
                color={"#333"}
                boxShadow={"inset 0 -2px 0 #efefef"}
              ></Header>
            }
          >
            <Route path="/" element={<Footer></Footer>}>
              <Route
                path="tours/:tourId"
                element={<TourPage></TourPage>}
              ></Route>
            </Route>
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
