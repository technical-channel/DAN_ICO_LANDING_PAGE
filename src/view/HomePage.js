import React from "react";
import Carousel from "../components/Carousel";
import About from "../components/About";
import Features from "../components/Features";
import Section1 from "../components/Section1";
import Section2 from "../components/Section2";
import PresalePhase from "../components/PresalePhase";
import BusinessSector from "../components/BusinessSector";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Ecosystem from "../components/Ecosystem";
import MetaverseNFT from "../components/MetaverseNFT";
import TokenDetails from "../components/TokenDetails";
import OurTeam from "../components/OurTeam";
import OurAdvisor from "../components/OurAdvisor";
import OurCommunity from "../components/OurCommunity";
import Documents from "../components/Documents";
import OurPartner from "../components/OurPartner";
import FAQ from "../components/FAQ";
import LatestNews from "../components/LatestNews";
import RoadmapVideo from "../components/RoadmapVideo";
import Footer from "../components/Footer";
import Tokenomics from "../components/Tokenomics";
import TokenSec from "../components/TokenSec";
function HomePage() {
  return (
    <div>
      {" "}
      <Header />
      <Hero />
      <Carousel />
      <About />
      <Section1 />
      <Features />
      <Section2 />
      <PresalePhase />
      <BusinessSector />
   <TokenSec /> 
      <Ecosystem />
      <MetaverseNFT />
     <RoadmapVideo />
      <Tokenomics />
      <TokenDetails />
      <OurTeam />
      <OurAdvisor />
      <OurCommunity />
      <Documents />
      <OurPartner />
      <FAQ />
      <LatestNews />
      <Footer />
    </div>
  );
}

export default HomePage;
