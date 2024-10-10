import React, { useState } from "react";
import HeaderSection from "../sections/HeaderSection";
import Footer from "../components/Footer";
import Header from "../components/Header";

const HomePage = ({ setIsModalVisible }) => {
  const [selectedLocale, setSelectedLocale] = useState("en"); // Установите начальное значение локали

  return (
    <>
      <Header
        setIsModalVisible={setIsModalVisible}
        setSelectedLocale={setSelectedLocale} // Передача функции для обновления локали
      />
      <HeaderSection
        setIsModalVisible={setIsModalVisible}
        selectedLocale={selectedLocale} // Передача локали
      />
      <Footer />
    </>
  );
};

export default HomePage;
