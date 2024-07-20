import React, { useRef, useState } from "react";
import axios from "axios";
import style from "../scss/components/modal.module.scss";
import zvezda from "../assets/img/zvezda.webp";
import { Link } from "react-router-dom";
import { generateSignature } from "../utils/auth";

const Modal = ({ isVisible, onClose, setIsModalVisible }) => {
  const [response, setResponse] = useState(null);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [businessField, setBusinessField] = useState("");
  const [yearsInBusiness, setYearsInBusiness] = useState("");
  const [trafficKPI, setTrafficKPI] = useState("");
  const fileInputRef = useRef(null);

  if (!isVisible) return null;

  const createCustomer = async (customerData) => {
    const method = "https://api.zadarma.com/v1/zcrm/customers";
    const signature = generateSignature(method, customerData);

    console.log("Generated Signature:", signature);
    console.log("Customer Data:", customerData);

    try {
      const response = await axios.post(
        "/api/v1/zcrm/customers",
        customerData,
        {
          headers: {
            Authorization: signature,
          },
        }
      );
      setResponse(response.data);
    } catch (error) {
      console.error("Error creating customer:", error);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const customerData = {
      name: "Good Company",
      status: "company",
      type: "client",
      responsible_user_id: 20,
      employees_count: "50",
      comment: "",
      country: "GB",
      city: "London",
      address: "",
      zip: "",
      website: "",
      lead_source: "manual",
      phones: [
        {
          type: "work",
          phone: "+44123456789",
        },
      ],
      contacts: [
        {
          type: "email_work",
          value: "good_company@example.com",
        },
      ],
      labels: [{ id: 12 }, { id: 13 }],
      utms: [{ id: 19 }, { id: 20 }],
      custom_properties: [
        {
          id: 18,
          value: "high",
        },
      ],
    };

    createCustomer(customerData);
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
            {response && (
              <div>
                <pre>{JSON.stringify(response, null, 2)}</pre>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
