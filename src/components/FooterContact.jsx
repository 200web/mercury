import React from "react";
import appStyles from "../scss/app.module.scss";
import telegram from "../assets/img/telega.webp";
import facebook from "../assets/img/Face.webp";
import instagram from "../assets/img/inst.webp";
import whatsapp from "../assets/img/whatsapp.webp";

const FooterContact = () => {
  return (
    <div className={appStyles.contactBlock} id="Контакты">
      <div className={appStyles.contactContent}>
        <div className={appStyles.container__contact}>
          <label id="Contacts">Контакты</label>
        </div>
        <div className={appStyles.cardGrid}>
          <div className={appStyles.socialContainer}>
            <div className={appStyles.container}>
              <div className={appStyles.socialCard}>
                <div className={appStyles.image}>
                  <img src={facebook} width={50} height={50} alt="facebook" />
                </div>
                <div className={appStyles.title}>Facebook</div>
              </div>
            </div>
            <div className={appStyles.container}>
              <div className={appStyles.socialCard}>
                <div className={appStyles.image}>
                  <img src={telegram} width={70} height={70} alt="facebook" />
                </div>
                <div className={appStyles.title}>Telegram</div>
              </div>
            </div>
            <div className={appStyles.container}>
              <div className={appStyles.socialCard}>
                <div className={appStyles.image}>
                  <img src={instagram} width={70} height={70} alt="facebook" />
                </div>
                <div className={appStyles.title}>Instagram</div>
              </div>
            </div>
            <div className={appStyles.container}>
              <div className={appStyles.socialCard}>
                <div className={appStyles.image}>
                  <img src={whatsapp} width={70} height={70} alt="facebook" />
                </div>
                <div className={appStyles.title}>WhatsApp</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FooterContact;
