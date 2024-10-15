import React, { useRef, useState, useEffect } from "react";
import axios from "axios";
import style from "../scss/components/modal.module.scss";
import zvezda from "../assets/img/zvezda.webp";
import { Link } from "react-router-dom";

const Modal = ({ isVisible, onClose, setIsModalVisible, selectedLocale }) => {
  const [response, setResponse] = useState(null);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [businessField, setBusinessField] = useState("");
  const [yearsInBusiness, setYearsInBusiness] = useState("");
  const [trafficKPI, setTrafficKPI] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [message, setMessage] = useState("");
  const [buttonText, setButtonText] = useState("Давайте начнём!");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const fileInputRef = useRef(null);

  // Move hooks outside any conditions
  useEffect(() => {
    console.log("Current errorMessage:", errorMessage);
  }, [errorMessage]);

  const [modalData, setModalData] = useState({
    form_title: "Отправьте вашу заявку и мы свяжемся с вами!",
    form_description: "Это поможет лучше понять цели вашего бизнеса.",
    form_name: "Ваше имя",
    form_number: "Номер телефона",
    form_business_area: "Сейчас",
    form_years: "Сфера бизнеса (необязательно)",
    form_KPI_traffic: "Где запускали / планируете запускать трафик KPI (необязательно)",
    form_button: "Давайте начнём!",
    form_privacy_policy: "Отправляя данную форму, вы даете согласие на обработку персональных данных, а также ознакомлен(-а) с политикой конфиденциальности",
  });

  useEffect(() => {
    console.log("Selected Locale: Modal", selectedLocale);

    const fetchModalData = async () => {
      try {
        const response = await fetch(
          `${process.env.REACT_APP_API_URL}api/form-page?locale=${selectedLocale}`
        );
        if (response.ok) {
          const result = await response.json();
          const fetchedData = result.data;

          setModalData((prevData) => ({
            ...prevData,
            form_title: fetchedData.form_title || prevData.form_title,
            form_description: fetchedData.form_description || prevData.form_description,
            form_name: fetchedData.form_name || prevData.form_name,
            form_number: fetchedData.form_number || prevData.form_number,
            form_business_area: fetchedData.form_business_area || prevData.form_business_area,
            form_years: fetchedData.form_years || prevData.form_years,
            form_KPI_traffic: fetchedData.form_KPI_traffic || prevData.form_KPI_traffic,
            form_button: fetchedData.form_button || prevData.form_button,
            form_privacy_policy: fetchedData.form_privacy_policy || prevData.form_privacy_policy,
          }));

          setButtonText(fetchedData.form_button || "Давайте начнём!");
        } else {
          console.error("Ошибка получения данных с сервера");
        }
      } catch (error) {
        console.error("Ошибка запроса данных:", error);
      }
    };

    fetchModalData();
  }, [selectedLocale]);

  // Keep return logic after hooks
  if (!isVisible) return null;

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (isSubmitting) return;

    if (!name || !phone) {
      setErrorMessage("Name and Phone are required");
      return;
    }

    setIsSubmitting(true);
    setButtonText("Loading...");

    let comment = "lead from web";

    if (businessField) {
      comment += `, Сфера бизнеса: ${businessField}`;
    }
    if (yearsInBusiness) {
      comment += `, Сколько лет работаете: ${yearsInBusiness}`;
    }
    if (trafficKPI) {
      comment += `, Где запускали / планируете запускать трафик KPI: ${trafficKPI}`;
    }

    const customerData = {
      name,
      phones: [{ phone }],
      comment
    };

    try {
      const response = await axios.post(
        'https://mercury-php.vercel.app/api/index.php',
        customerData,
        {
          headers: {
            'Content-Type': 'application/json',
          },
        }
      );

      console.log("Response data:", response.data);

      const jsonResponse = response.data.match(/{.*}/s);
      if (jsonResponse) {
        const parsedData = JSON.parse(jsonResponse[0]);

        if (parsedData.status === 'success' && !parsedData.leadData?.data?.error) {
          setErrorMessage('');
          setResponse(parsedData);
          setMessage('Lead created successfully');
          setButtonText("Success!");
        } else {
          const errorMessage = parsedData.leadData?.data?.error || 'An unknown error occurred';
          setErrorMessage("Номер введен неверно или уже существует");
          setMessage(`Error: ${errorMessage}`);
          setButtonText({buttonText});
        }
      } else {
        setErrorMessage('Не удалось обработать ответ сервера');
        setButtonText({buttonText});
      }
    } catch (error) {
      setErrorMessage('Произошла ошибка при отправке данных. Попробуйте еще раз.');
      setMessage('An error occurred while submitting the form. Please try again.');
      setButtonText({buttonText});
    } finally {
      setIsSubmitting(false);
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
            <label>{modalData.form_title}</label>
            <p>{modalData.form_description}</p>
          </div>
          <form className={style.modalForm} onSubmit={handleSubmit}>
            <div className={style.formGroup}>
              <input
                type="text"
                placeholder={modalData.form_name}
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
              <input
                type="text"
                placeholder={modalData.form_business_area}
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
                placeholder={modalData.form_number}
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                required
              />
              <input
                type="text"
                placeholder={modalData.form_years}
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
                placeholder={modalData.form_KPI_traffic}
                value={trafficKPI}
                onChange={(e) => setTrafficKPI(e.target.value)}
              />
            </div>
            {errorMessage && (
              <div className={style.errorMessage} style={{ color: 'red', marginBottom: '10px' }}>
                {errorMessage}
              </div>
            )}
            <div className={style.submitButton}>
              <button type="submit" disabled={isSubmitting}>
                {buttonText}
              </button>
            </div>
          </form>
          <div className={style.policy}>
            <span>
           
              <Link to="/policy" onClick={handleCloseModal}>
              {modalData.form_privacy_policy}{" "}
              </Link>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
