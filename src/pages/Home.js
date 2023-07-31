import React, { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Banner from "../components/Banner";
import pictureHome from "../assets/pictureHome.png";
import Cards from "../components/Cards";
import data from "../data/data.json";

const Home = () => {
  const [housingData, setHousingData] = useState(data);
  return (
    <div>
      <Header />
      <main className="home-body">
        <div className="banner-small-home">
          <Banner dimBanner="small" picture={pictureHome} />
          <p className="text-banner-home">Chez vous, partout et ailleurs</p>
        </div>
        <section>
          <Cards data={housingData} />
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Home;