import React from "react";
import HeaderSection from "../sections/HeaderSection";
import Footer from "../components/Footer";
import Header from "../components/Header";

const HomePage = ({ setIsModalVisible, selectedLocale, setSelectedLocale }) => {
  return (
    <>
      <Header
        setIsModalVisible={setIsModalVisible}
        setSelectedLocale={setSelectedLocale} // Передаем функцию для обновления локали
      />
      <HeaderSection
        setIsModalVisible={setIsModalVisible}
        selectedLocale={selectedLocale} // Передаем локаль в HeaderSection
      />
      <Footer selectedLocale={selectedLocale} /> {/* Локаль в футере */}
    </>
  );
};

export default HomePage;
