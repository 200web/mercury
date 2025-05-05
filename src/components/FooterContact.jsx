import React, { useEffect, useState } from "react";
import appStyles from "../scss/app.module.scss";
import telegram from "../assets/img/telega.webp";
import facebook from "../assets/img/Face.webp";
import instagram from "../assets/img/inst.webp";
import whatsapp from "../assets/img/whatsapp.webp";

const FooterContact = ({ selectedLocale }) => {


  const [contactsLabel, setContactsLabel] = useState("Контакты");
  // State for menu data


  const [contactData, setContactData] = React.useState({
    instagram_link: "https://www.instagram.com/mercury__arts/?igsh=c2xoaGR1b3ZmOHUy",
    facebook_link: "https://www.facebook.com/people/Mercury-Arts/61555743932322/",
  });


  const fetchContactsLabel = async () => {
    try {
      const response = await fetch(
        `${process.env.REACT_APP_API_URL}api/contact?locale=${selectedLocale}`
      );

      if (!response.ok) {
        throw new Error("Ошибка получения данных");
      }

      const result = await response.json();
      const fetchedData = result.data;
      console.log(fetchedData);
      // Обновляем надпись "Контакты" на основе данных из API
      setContactsLabel(fetchedData.contacts_title);

      setContactData((prevData) => ({
        ...prevData,
        instagram_link: fetchedData.instagram_link || prevData.instagram_link,
        facebook_link: fetchedData.facebook_link || prevData.facebook_link,
      }));

      console.log(fetchedData.instagram_link);
    } catch (error) {
      console.error("Ошибка запроса данных:", error);
      // В случае ошибки оставляем русский вариант "Контакты"
      setContactsLabel("Контакты");
    }
  };





  useEffect(() => {
    fetchContactsLabel();
  }, [selectedLocale]);

  return (
    <div className={appStyles.contactBlock} id="Контакты">
      {/* <div className={appStyles.contactContent}> */}
        <div className={appStyles.container__contact}>
          <label id="Contacts">{contactsLabel}</label>
        </div>
        <div className={appStyles.cardGrid}>
          <div className={appStyles.socialContainer}>
            <a
              href={contactData.facebook_link}
              className={appStyles.container}
            >
              <div className={appStyles.socialCard}>
                <div className={appStyles.image}>
                  <img src={facebook} width={50} height={50} alt="facebook" />
                </div>
                <div className={appStyles.title}>Facebook</div>
              </div>
            </a>
            <a
              href="https://t.me/george_mercury"
              className={appStyles.container}
            >
              <div className={appStyles.socialCard}>
                <div className={appStyles.image}>
                  <img src={telegram} width={70} height={70} alt="Telegram" />
                </div>
                <div className={appStyles.title}>Telegram</div>
              </div>
            </a>
            <a
              href={contactData.instagram_link}
              className={appStyles.container}
            >
              <div className={appStyles.socialCard}>
                <div className={appStyles.image}>
                  <img src={instagram} width={70} height={70} alt="Instagram" />
                </div>
                <div className={appStyles.title}>Instagram</div>
              </div>
            </a>
            <a href="https://api.whatsapp.com/send?phone=48459569775" className={appStyles.container}>
              <div className={appStyles.socialCard}>
                <div className={appStyles.image}>
                  <img src={whatsapp} width={70} height={70} alt="WhatsApp" />
                </div>
                <div className={appStyles.title}>WhatsApp</div>
              </div>
            </a>
          </div>
        </div>
      {/* </div> */}
    </div>
  );
};

export default FooterContact;
