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
        <Banner
          dimBanner="small"
          picture={pictureHome}
          texte1="Chez vous, partout et ailleurs"
        />
        <section>
          <Cards data={housingData} />
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Home;
