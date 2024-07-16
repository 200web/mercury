import { Route, Routes } from "react-router-dom";
import React from "react";
import appStyles from "./scss/app.module.scss";
import HomePage from "./pages/HomePage";
import Modal from "./components/Modal";
import Header from "./components/Header";

function App() {
  const [isModalVisible, setIsModalVisible] = React.useState(false);
  const handleModalClose = () => {
    setIsModalVisible(false);
  };
  return (
    <div className={appStyles.layout}>
      <Header setIsModalVisible={setIsModalVisible} />
      <Modal isVisible={isModalVisible} onClose={handleModalClose} />
      <Routes>
        <Route
          path="/"
          element={<HomePage setIsModalVisible={setIsModalVisible} />}
        />
      </Routes>
    </div>
  );
}

export default App;
