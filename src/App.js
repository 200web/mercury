import { Route, Routes } from "react-router-dom";
import React from "react";
import appStyles from "./scss/app.module.scss";
import HomePage from "./pages/HomePage";
import Modal from "./components/Modal";
import Policy from "./pages/Policy";

function App() {
  const [isModalVisible, setIsModalVisible] = React.useState(false);
  const handleModalClose = () => {
    setIsModalVisible(false);
  };
  return (
    <div className={appStyles.layout}>
      <Modal
        isVisible={isModalVisible}
        onClose={handleModalClose}
        setIsModalVisible={setIsModalVisible}
      />
      <Routes>
        <Route
          path="/"
          element={<HomePage setIsModalVisible={setIsModalVisible} />}
        />
        <Route path="/policy" element={<Policy />} />
      </Routes>
    </div>
  );
}

export default App;
