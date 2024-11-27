import React, { lazy, useEffect } from "react";
import { Suspense } from "react";
import { BrowserRouter, Outlet, Route, Routes } from "react-router-dom";
import { SectionRefsProvider } from "./Providers/SectionRefsContext";

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
  const TourPackages = lazy(() => import("./Pages/TourPackages/TourPackages"));
  const ContactUs = lazy(() => import("./Pages/ContactUs/ContactUs"));
  const TicketsPage = lazy(() => import("./Pages/TicketsPage/TicketsPage"));

  return (
    <BrowserRouter>
      <SectionRefsProvider>
        <Routes>
          <Route path="/" element={<SuspenseLayout></SuspenseLayout>}>
            <Route path="/" element={<Header></Header>}>
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

            <Route path="/" element={<Header isWhite={false}></Header>}>
              <Route path="/" element={<Footer></Footer>}>
                <Route
                  path="tours/:tourId"
                  element={<TourPage></TourPage>}
                ></Route>
                <Route
                  path="TourPackages"
                  element={<TourPackages></TourPackages>}
                ></Route>
                <Route
                  path="ContactUs"
                  element={<ContactUs></ContactUs>}
                ></Route>
                <Route
                  path="Tickets"
                  element={<TicketsPage></TicketsPage>}
                ></Route>
              </Route>
            </Route>
          </Route>
        </Routes>
      </SectionRefsProvider>
    </BrowserRouter>
  );
}

export default App;
