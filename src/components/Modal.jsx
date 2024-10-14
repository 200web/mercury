import React, { useRef, useState, useEffect } from "react";
import React, { useRef, useState, useEffect } from "react";
import axios from "axios";
import style from "../scss/components/modal.module.scss";
import zvezda from "../assets/img/zvezda.webp";
import { Link } from "react-router-dom";

const Modal = ({ isVisible, onClose, setIsModalVisible }) => {
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

  useEffect(() => {
    console.log("Current errorMessage:", errorMessage);
  }, [errorMessage]);

  useEffect(() => {
    console.log("Current errorMessage:", errorMessage);
  }, [errorMessage]);

  if (!isVisible) return null;

  const handleSubmit = async (event) => {
    event.preventDefault();
    
    if (isSubmitting) return;

    // Validate required fields
    if (!name || !phone) {
      setErrorMessage("Имя и номер телефона обязательны для заполнения");
      return;
    }

    setIsSubmitting(true);
    setButtonText("Отправка...");

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
        'https://mercury-php.vercel.app/api/index.php',
        customerData,
        {
          headers: {
            'Content-Type': 'application/json',
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
          setButtonText("Отправлено!"); // Устанавливаем текст кнопки "Отправлено!" при успешной отправке
          console.log('success');
        } else {
          const errorMessage = parsedData.leadData?.data?.error || 'An unknown error occurred';
          setErrorMessage("Номер введен неверно или уже существует");
          setMessage(`Error: ${errorMessage}`);
          console.error('Error creating lead:', errorMessage);
          setButtonText("Давайте начнём!"); // Возвращаем текст кнопки в исходное состояние при ошибке
        }
      } else {
        setErrorMessage('Не удалось обработать ответ сервера');
        console.error('Ошибка обработки ответа:', response.data);
        setButtonText("Давайте начнём!"); // Возвращаем текст кнопки в исходное состояние при ошибке
      }
    } catch (error) {
      setErrorMessage('Произошла ошибка при отправке данных. Попробуйте еще раз.');
      setMessage('An error occurred while submitting the form. Please try again.');
      console.error('Произошла ошибка при отправке данных.', error);
      setButtonText("Давайте начнём!"); // Возвращаем текст кнопки в исходное состояние при ошибке
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
                required
              />
              <input
                type="text"
                placeholder="Сфера бизнеса (необязательно)"
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
                required
              />
              <input
                type="text"
                placeholder="Сколько лет работаете (необязательно)"
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
              Отправляя данную форму, вы даете согласие на обработку
              персональных данных, а также ознакомлен(-а) с{" "}
              <Link to="/policy" onClick={handleCloseModal}>
                политикой конфиденциальности.
              </Link>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;