import Hero from "../../components/sections/Hero/Hero";
import About from "../../components/sections/About/AboutUs";
import Products from "../../components/sections/Products/Products";
import MillingNetwork from "../../components/sections/challengessolution/MillingNetwork";
import FeatureGrid from "../../components/sections/FeatureGrid/FeatureGrid";
import BusinessModel from "../../components/sections/BusinessModel/BusinessModel";
import ProductShowcase from "../../components/sections/ProductShowcase/ProductShowcase";
import HowItWorks from "../../components/sections/ProcessWorking/HowItWorks";
import Operationsflow from "../../components/sections/Operationsflow/Operationsflow";
import FAQ from "../../components/sections/FAQ/FAQ";

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Operationsflow/>
      <Products />
      <MillingNetwork />
      <HowItWorks />
      <BusinessModel />
      <FeatureGrid />
      <ProductShowcase />
      <FAQ />
    </main>
  );
}
