import React from "react";
import Navbar from "./navbar";
import Header from "./header";
import HowItWorks from "./HowItWorks";
import Aboutus from "./Aboutus";
import Contact from "./Contact";
import Footer from "./footer";
import Services from "./Services";
import GalleryImg from "./GalleryImg";



const App = () =>{
  return( <>
  <Navbar />
  <Header />
  <HowItWorks />
  <GalleryImg/>
  <Aboutus />
  <Services/>
  <Contact />
  <Footer />

  </>
  );
};

export default App;
