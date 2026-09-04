import Hero from "../../components/sections/Hero/Hero";
import About from "../../components/sections/About/AboutUs";
import Products from "../../components/sections/Products/Products";
import FeatureGrid from "../../components/sections/FeatureGrid/FeatureGrid";
import HowItWorks from "../../components/sections/ProcessWorking/HowItWorks";
import Operationsflow from "../../components/sections/Operationsflow/Operationsflow";
import FAQ from "../../components/sections/FAQ/FAQ";
import VideoDemo from "../../components/sections/VideoDemo/VideoDemo";
import DashboardPreview from "../../components/sections/DashboardPreview/DashboardPreview";
import AnywhereYouWork from "../../components/sections/AnywhereYouWork/AnywhereYouWork";
import CompareTable from "../../components/sections/CompareTable/CompareTable";
import Maintenance from "../../components/sections/Maintenance/Maintenance";
import PlanFinder from "../../components/sections/PlanFinder/PlanFinder";
export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Operationsflow />
      <Products />
      <DashboardPreview />
      <VideoDemo />
      {/* <MillingNetwork /> */}
      <HowItWorks />
      <CompareTable />
      {/* <BusinessModel /> */}
      <Maintenance />

      <FeatureGrid />
      <PlanFinder />
      <AnywhereYouWork />
      <FAQ />
    </main>
  );
}
