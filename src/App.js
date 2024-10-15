import { Route, Routes } from "react-router-dom";
import React, { useState } from "react";
import appStyles from "./scss/app.module.scss";
import HomePage from "./pages/HomePage";
import Modal from "./components/Modal";
import Policy from "./pages/Policy";

function App() {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const handleModalClose = () => {
    setIsModalVisible(false);
  };

  // Определение дефолтной локали и состояния локали
  const defaultLocale = navigator.language.split('-')[0];
  const [selectedLocale, setSelectedLocale] = useState(defaultLocale);

  return (
    <div className={appStyles.layout}>
      <Modal
        isVisible={isModalVisible}
        onClose={handleModalClose}
        setIsModalVisible={setIsModalVisible}
        selectedLocale={selectedLocale} // Передаем локаль в модалку
      />
      <Routes>
        <Route
          path="/"
          element={
            <HomePage 
              setIsModalVisible={setIsModalVisible}
              selectedLocale={selectedLocale} // Передаем локаль в HomePage
              setSelectedLocale={setSelectedLocale} // Передаем функцию обновления локали
            />
          }
        />
        <Route path="/policy" element={<Policy />} />
      </Routes>
    </div>
  );
}

export default App;
