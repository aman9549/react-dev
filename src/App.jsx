import { useState } from "react";
import Wrapper from "./components/Wrapper";
import { Color } from "./hooks/Color";
import Hook1 from "./hooks/Hook1";
import Button from "./utility/Button";
import Image from "./hooks/Image";
import Hook2 from "./hooks/Hook2";
import Hook3 from "./hooks/Hook3";
import ChildA from "./context/ChildA";
import Hook4 from "./hooks/Hook4";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Service from "./pages/Service";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <>
      {/* <Wrapper>
        <Hook1 />
        <Hook2 /> */}
      {/* <ChildA message={"Helloooo"}  /> */}
      {/* <Hook4 /> */}
      {/* </Wrapper> */}
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/service" element={<Service />} />
          <Route path="*" element={<Service />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
