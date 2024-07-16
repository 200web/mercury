import React, { useRef, useState } from "react";
import style from "../scss/components/modal.module.scss";
import picture from "../assets/img/picture.webp";
import zvezda from "../assets/img/zvezda.webp";

const Modal = ({ isVisible, onClose }) => {
  const [selectedFiles, setSelectedFiles] = useState([]);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [businessField, setBusinessField] = useState("");
  const [yearsInBusiness, setYearsInBusiness] = useState("");
  const [trafficKPI, setTrafficKPI] = useState("");
  const fileInputRef = useRef(null);

  if (!isVisible) return null;

  const handleImageClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  const deleteFiles = (index) => {
    setSelectedFiles((prevFiles) => {
      const updatedFiles = prevFiles.filter((file, idx) => idx !== index);
      return updatedFiles;
    });
  };

  const handleFileChange = (event) => {
    const files = Array.from(event.target.files);

    setSelectedFiles((prevFiles) => {
      const remainingSlots = 5 - prevFiles.length;

      const newFiles = files.slice(0, remainingSlots);

      return [...prevFiles, ...newFiles];
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("entry.140982984", name);
    formData.append("entry.581554228", phone);
    formData.append("entry.532256391", businessField);
    formData.append("entry.2123035029", yearsInBusiness);
    formData.append("entry.464661711", trafficKPI);

    fetch(
      "https://docs.google.com/forms/d/e/1FAIpQLSciBD6OY3iKdKQ_RJHQ4PYsV_7M6xu8t-eyD4ZFW8vNhaGUVA/formResponse",
      {
        method: "POST",
        body: formData,
        mode: "no-cors",
      }
    )
      .then(() => {
        alert("Form submitted successfully!");
      })
      .catch((error) => {
        console.error("Error submitting the form: ", error);
      });
  };

  return (
    <div className={style.modal}>
      <div className={style.modalWrapper} onClick={onClose}>
        <div
          className={style.modalContainer}
          onClick={(e) => e.stopPropagation()}
        >
          <div className={style.modalHeader}>
            <label>Отправьте вашу заявку и мы свяжемся с вами!</label>
            <p>Это поможет лучше понять цели вашего бизнеса.</p>
          </div>
          <form className={style.modalForm} onSubmit={handleSubmit}>
            <div className={style.formGroup}>
              <input
                type="text"
                placeholder="Ваше имя"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              <input
                type="text"
                placeholder="Сфера бизнеса"
                value={businessField}
                onChange={(e) => setBusinessField(e.target.value)}
              />
              {name === "" && (
                <img
                  className={style.img1}
                  draggable="false"
                  src={zvezda}
                  alt="zvezda"
                />
              )}
            </div>
            <div className={style.formGroup}>
              <input
                type="text"
                placeholder="Номер телефона"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />
              <input
                type="text"
                placeholder="Сколько лет работаете"
                value={yearsInBusiness}
                onChange={(e) => setYearsInBusiness(e.target.value)}
              />
              {phone === "" && (
                <img
                  className={style.img2}
                  draggable="false"
                  src={zvezda}
                  alt="zvezda"
                />
              )}
            </div>
            <div className={style.formGroup}>
              <input
                type="text"
                placeholder="Где запускали / планируете запускать трафик KPI"
                value={trafficKPI}
                onChange={(e) => setTrafficKPI(e.target.value)}
              />
              <div
                className={`${style.fileInput} ${
                  selectedFiles.length === 0 ? "" : style.active
                }`}
              >
                <span>
                  {selectedFiles.length === 0 ? "Прикрепите материалы" : ""}
                </span>
                <div className={style.image} onClick={handleImageClick}>
                  <img draggable="false" src={picture} alt="data" />
                </div>
                <input
                  type="file"
                  ref={fileInputRef}
                  style={{ display: "none" }}
                  accept=".png,.jpg,.jpeg,.mp4,.mov"
                  onChange={handleFileChange}
                />
                {selectedFiles.length > 0 && (
                  <div className={style.selectedFiles}>
                    {selectedFiles.map((file, index) => (
                      <div className={style.fileName} key={index}>
                        <label>{file.name}</label>
                        <div
                          className={style.cancelButton}
                          onClick={() => deleteFiles(index)}
                        >
                          <span className={style.cancel}></span>
                          <span className={style.cancel}></span>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
            <div className={style.submitButton}>
              <button type="submit">Давайте начнём!</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Modal;
