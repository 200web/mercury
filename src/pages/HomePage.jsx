import React from "react";
import HeaderSection from "../sections/HeaderSection";
import Footer from "../components/Footer";

const HomePage = ({ setIsModalVisible }) => {
  return (
    <>
      <HeaderSection setIsModalVisible={setIsModalVisible} />
      <Footer />
    </>
  );
};

export default HomePage;
