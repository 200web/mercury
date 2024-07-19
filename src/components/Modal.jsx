import React, { useRef, useState } from "react";
import axios from "axios";
import CryptoJS from "crypto-js";
import md5 from "crypto-js/md5";
import style from "../scss/components/modal.module.scss";
import picture from "../assets/img/picture.webp";
import zvezda from "../assets/img/zvezda.webp";
import { Link } from "react-router-dom";

const Modal = ({ isVisible, onClose, setIsModalVisible }) => {
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

  const createSignature = (method, paramsStr, secret) => {
    const stringToSign = method + paramsStr + md5(paramsStr);
    const hash = CryptoJS.HmacSHA1(stringToSign, secret);
    const base64Hash = CryptoJS.enc.Base64.stringify(hash);
    return base64Hash;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const userKey = "YOUR_USER_KEY";
    const secret = "YOUR_SECRET_KEY";
    const method = "/v1/zcrm/customers";

    const customerData = {
      name: name,
      status: "individual",
      type: "potential",
      comment: "",
      phones: [
        {
          type: "work",
          phone: phone,
        },
      ],
    };

    const paramsStr = new URLSearchParams(customerData).toString();
    const signature = createSignature(method, paramsStr, secret);

    try {
      const response = await axios.post(
        "https://api.zadarma.com/v1/zcrm/customers",
        customerData,
        {
          headers: {
            Authorization: `${userKey}:${signature}`,
            "Content-Type": "application/json",
          },
        }
      );

      if (response.status === 200) {
        alert("Client created successfully!");
      } else {
        console.error("Failed to create client", response);
      }
    } catch (error) {
      console.error("Error creating client: ", error);
    }
  };

  const handleCloseModal = () => {
    setIsModalVisible(false);
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
                placeholder="Сфера бизнеса (не обязательно)"
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
                placeholder="Сколько лет работаете (не обязательно)"
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
                placeholder="Где запускали / планируете запускать трафик KPI (необязательно)"
                value={trafficKPI}
                onChange={(e) => setTrafficKPI(e.target.value)}
              />
            </div>
            <div className={style.submitButton}>
              <button type="submit">Давайте начнём!</button>
            </div>
          </form>
          <div className={style.policy}>
            <span>
              Отправляя данную форму. Вы даете согласие на обработку
              персональных данных, а также ознакомлен(-а) с{" "}
              <Link to="/policy" onClick={handleCloseModal}>
                политикой конфиденциальности
              </Link>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
