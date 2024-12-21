import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Photos from "./components/Photos";
import React from "react";
import NavBar from "./components/NavBar";
import Luxury from "./components/luxury";
import Bikes from "./components/bikes";

export default function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          
          <Route path="/" element={<NavBar/>} />
          <Route path="/home" element={<Home />} />
          <Route path="/buycar" element={<Photos />} />
          <Route path="/luxurycars" element={<Luxury />} />
          <Route path="/bikes" element={<Bikes />} />

        </Routes>
      </BrowserRouter>
    </div>
  );
}