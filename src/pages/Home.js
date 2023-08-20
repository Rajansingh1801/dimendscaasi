import React from "react";
import Header from "../component/header/header";
import Slider from "../component/slider/slider";
import Collection from "../component/our collection/Collection";
import Explore from "../component/Explore/Explore";
import Contactus from "../component/contactus/Contactus";
import Footer from "../component/footer/footer";

const Home = () => {
  return (
    <div>
      <Header />
      <Slider />
      <Collection />
      <Explore />
      <Contactus />
      <Footer />
    </div>
  );
};

export default Home;
