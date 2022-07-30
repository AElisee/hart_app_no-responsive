import React from "react";
import Footer from "../components/Footer";
import HeaderContent from "../components/HeaderContent";
import Main from "../components/Main";
import Navigation from "../components/Navigation";

const Home = () => {
  return (
    <div className="home">
      <header>
        <Navigation />
        <HeaderContent />
      </header>
      <Main />
      <Footer />
    </div>
  );
};

export default Home;
