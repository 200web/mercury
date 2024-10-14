import React, { useState } from "react";
import HeaderSection from "../sections/HeaderSection";
import Footer from "../components/Footer";
import Header from "../components/Header";

const HomePage = ({ setIsModalVisible }) => {
  
const defaultLocale = navigator.language.split('-')[0];

  const [selectedLocale, setSelectedLocale] = useState(defaultLocale);
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
      <Footer 
      selectedLocale={selectedLocale}/>
    </>
  );
};

export default HomePage;
