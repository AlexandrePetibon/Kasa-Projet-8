import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Banner from "../components/Banner";

const Home = () => {
  return (
    <div>
      <Header />
      <main className="home-body">
      <Banner />
      </main>
      <Footer />
    </div>
  );
};

export default Home;