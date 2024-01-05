import React from "react";
import Navbar from "./sections/navbar/Navbar";
import Header from "./sections/header/Header";
import About from "./sections/about/About";
import Service from "./sections/service/Service";
import Portfolio from "./sections/portfolio/Portfolio";
import Testimonials from "./sections/testimonials/Testimonials";
import FAQs from "./sections/faqs/FAQs";
import Contact from "./sections/contact/Contact";
import Footer from "./sections/footer/Footer";
import FloatingNav from "./sections/floating-nav/FloatingNav";
import Modal from "./components/Modal";

const App = () => {
  return (
    <main>
      <Navbar />
      <Header />
      <About />
      <Service />
      <Portfolio />
      <Testimonials />
      <FAQs />
      <Contact />
      <Footer />
      {/* <Modal /> */}
      <FloatingNav />
    </main>
  );
};

export default App;
