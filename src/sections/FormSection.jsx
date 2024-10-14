import React, { useEffect, useState } from "react";
import arrow from "../assets/img/Arrow.webp";
import appStyle from "../scss/app.module.scss";

const FormSection = ({ setIsModalVisible, selectedLocale }) => {
  const [formData, setFormData] = useState({
    title: "Заполни форму",
    description: "и получи бесплатную консультацию",
  });

  const fetchFormData = async () => {
    try {
      const response = await fetch(
        `${process.env.REACT_APP_API_URL}api/form?locale=${selectedLocale}`
      );

      if (!response.ok) {
        throw new Error("Ошибка получения данных");
      }

      const result = await response.json();
      const fetchedData = result.data;

      // Обновляем данные формы с учетом данных из API
      const updatedFormData = {
        title: fetchedData.Form_title,
        description: fetchedData.Form_description,
      };

      setFormData(updatedFormData);
    } catch (error) {
      console.error("Ошибка запроса данных:", error);
      // В случае ошибки оставляем русские варианты
      setFormData((prevData) => prevData);
    }
  };

  useEffect(() => {
    fetchFormData();
  }, [selectedLocale]);

  return (
    <div className={appStyle.formButton}>
      <div className={appStyle.label}>
        <label>{formData.title}</label>
        <span>{formData.description}</span>
      </div>
      <div className={appStyle.buttonLayout}>
        <div className={appStyle.button} onClick={setIsModalVisible}>
          <img draggable="false" src={arrow} alt="arrow" />
        </div>
      </div>
    </div>
  );
};

export default FormSection;
