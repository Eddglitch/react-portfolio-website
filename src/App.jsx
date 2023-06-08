import React from "react";
// Importando Componentes 
import Header from "./Components/headerr/header";
import About from "./Components/aboutt/about";
import Nav from "./Components/navv/nav";
import Experience from "./Components/experiencee/experience";
import Portfolio from "./Components/portfolioo/portfolio";
import Services from "./Components/servicess/services";
import Contact from "./Components/contactt/contact";
import Testimonials from "./Components/testimonialss/testimonials";
import Footer from "./Components/footerr/footer";


const App = () => {
  return (
    <>

      <Header />
      <Nav />
      <About />
      <Experience />
      <Services />
      <Contact />
      <Portfolio />
      <Testimonials />
      <Footer />

    </>
  );
};

export default App
