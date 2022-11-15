import React from "react";
import Home from "./Home";
import Footer from "./Footer";
import Places from "./Places";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/places" element={<Places />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
