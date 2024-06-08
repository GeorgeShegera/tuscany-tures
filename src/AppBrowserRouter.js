import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./Pages/HomePage/HomePage";
import Redirect from "./Pages/Redirect/Redirect";
import Header from "./Layouts/Header/Header";
import TourPage from "./Pages/TourPage/TourPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={<Header color={"#fff"} boxShadow={"none"}></Header>}
        >
          <Route path="/" element={<HomePage></HomePage>}>
            <Route
              path="/Home/ResetPassword"
              element={<Redirect></Redirect>}
            ></Route>
          </Route>
          <Route path="TourPackages"></Route>
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
          <Route path="tours/:tourId" element={<TourPage></TourPage>}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
