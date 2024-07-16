import React from "react";
import HeaderSection from "../sections/HeaderSection";
import Footer from "../components/Footer";
import Header from "../components/Header";

const HomePage = ({ setIsModalVisible }) => {
  return (
    <>
      <Header setIsModalVisible={setIsModalVisible} />
      <HeaderSection setIsModalVisible={setIsModalVisible} />
      <Footer />
    </>
  );
};

export default HomePage;
