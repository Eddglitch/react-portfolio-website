import React from "react";

// Importando Componentes 
import Header from "././Components/header/header";
import About from "./Components/about/about";
import Nav from "./Components/nav/nav";
import Experience from "./Components/experience/experience";
import Portfolio from "./Components/portfolio/portfolio";
import Services from "./Components/services/services";
import Contact from "./Components/contact/contact";
import Testimonials from "./Components/testimonials/testimonials";
import Footer from "./Components/footer/footer";


const App = () => {
  return (
    <>

      <Header />
      <Nav />
      <About />
      <Experience />
      <Services />
      <Portfolio />
      <Testimonials />
      <Contact />
      <Footer />

    </>
  );
};

export default App;
