import { useState } from "react";
import "./App.css";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import HeroBanner from "./Components/HeroBanner/HeroBanner";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HeroBanner />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
