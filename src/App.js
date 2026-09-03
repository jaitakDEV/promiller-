import { Routes, Route } from "react-router-dom";

import Navbar from "./components/layout/Navbar/Navbar";
import Footer from "./components/layout/Footer/footer";
import SupportButton from "./components/layout/SupportButton/SupportButton";
import ScrollToTop from "./components/common/ScrollToTopButton";

import Home from "./pages/Home/Home";
import Products from "./components/sections/Products/Products";
import RSChoyal from "./pages/AboutRSChoyal/RSChoyal";
import Choyal from "./pages/Aboutchoyal/Choyal";
import Mavian from "./pages/AboutMavian/Mavian";
import Services from "./pages/ProductsServices/Services";
// import Operations from "./components/sections/Operationsflow/Operationsflow";
import Operations from "./pages/Operations/Operations";
import Technologies from "./pages/technologies/Technologies";
import CSMT from "./pages/CSMT/csmt";
import Charge from "./pages/Charge/charge";

import Calculators from "./pages/Calculators/calculator";
// import Graincircle from "./pages/Graincircle/GrainCircle";

export default function App() {
  return (
    <>
      <Navbar />
      <ScrollToTop />
      <SupportButton />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/mavian" element={<Mavian />} />
        <Route path="/products" element={<Products />} />
        <Route path="/director" element={<RSChoyal />} />
        <Route path="/about-rs-choyal-group" element={<Choyal />} />
        <Route path="/products-services" element={<Services />} />
        {/* <Route path="/operationsflow" element={<Operations />} /> */}
        <Route path="/operations" element={<Operations />} />
        
        <Route path="/technologies" element={<Technologies />} />
        <Route path="/csmt" element={<CSMT />} />
        <Route path="/charge" element={<Charge />} />
         <Route path="/calculator" element={<Calculators />}/>
         {/* <Route path="GrainCircle" element={<Graincircle />} />  */}
      </Routes>

      <Footer />
    </>
  );
}