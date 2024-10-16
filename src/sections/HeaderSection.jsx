import React from "react";
import appStyle from "../scss/app.module.scss";
import loaded from "../assets/img/accessLoaded.png";
import stat from "../assets/img/Stats2.gif";
import bomb from "../assets/img/bomb.webp";
import aim from "../assets/img/aim.webp";
import settings from "../assets/img/settings.webp";
import pick from "../assets/img/pick2.png";
import tick from "../assets/img/tick.webp";
import pazzle from "../assets/img/pazzle.webp";
import equlizer from "../assets/img/equlizer.gif";
import mercury from "../assets/img/mercuri2.gif";
import carouselIcon from "../assets/img/carouselIconn.gif";
import photo from "../assets/img/cameraa.gif";
import arrow from "../assets/img/Arrow.png";
import StageOfWork from "../components/StageWork";
import FooterContact from "../components/FooterContact";
import Founders from "./Founders";
import StageOfWorkSection from "./StageOfWorkSection";


const HeaderSection = ({ setIsModalVisible, selectedLocale }) => {
  const [activeCard, setIsActiveCard] = React.useState(0);
  const [isHovered, setIsHovered] = React.useState(false);
  const [isMobile, setIsMobile] = React.useState(window.innerWidth <= 960);

  // State for menu data
  const [menuData, setMenuData] = React.useState({
    Services: "Услуги",
  });


  // State for main-screen data
  const [mainData, setMainData] = React.useState({
    Name: "Mercury Arts",
    Description: "Помогаем бизнесу продавать свои товары и услуги в соцсетях",
    Consultation_button: "Консультация",
    Promo_text0: "Бесплатно",
    Promo_text1: "Сейчас",
    Card0: "Увеличиваем продажи",
    Card1: "Работаем на рынках EU USA",
    Card2: "Опыт работы в различных нишах",
  });


  // State for services data
  const [serviceData, setServiceData] = React.useState({
    Service1: {
      title: "TikTok Ads",
      description: "Реклама в TikTok",
      item1: "Разработка рекламной стратегии и продвижение в соцсетях (1 месяц)",
      item2: "Платные вспомогательные софты",
      item3: "Неограниченное количество фото и видео-объявлений",
      item4: "Отчетность по результатам рекламной кампании и формирование дальнейшей стратегии",
      includes_button: "Включает в себя",
      order_button: "Заказать",
    },
    Service2: {
      title: "Meta Ads",
      description: "Реклама в Instagram и Facebook",
      item1: "Разработка рекламной стратегии и продвижение в соцсетях (1 месяц)",
      item2: "Платные вспомогательные софты",
      item3: "Неограниченное количество фото и видео-объявлений",
      item4: "Отчетность по результатам рекламной кампании и формирование дальнейшей стратегии",
      order_button: "Заказать",
    },
    Service3: {
      title: "SMM",
      description: "Услуги по созданию и ведению контента для соцсетей",
      item1: "Создание контент-плана, темы и идеи для постов и reels",
      item2: "Написание продающих и вовлекающих постов для повышения активности",
      item3: "Создание бренд-бука: hightlights, визуал, описание и т.п.",
      item4: "Публикация контента в профиль",
      item5: "Съемки по запросу",
      item6: "Отчетность",
      includes_button: "Включает в себя",
      order_button: "Заказать",
    },
  });


  const timestamp = new Date().getTime();
  const apngSrc = `${stat}?${timestamp}`;

  React.useEffect(() => {
    console.log("Selected Locale:", selectedLocale); // Проверка значения локали


    const fetchMenuData = async () => {
      try {
        const response = await fetch(
          `${process.env.REACT_APP_API_URL}api/menu?locale=${selectedLocale}`
        );
        if (response.ok) {
          const result = await response.json();
          const fetchedData = result.data;

          setMenuData((prevData) => ({
            ...prevData,
            Services: fetchedData.Services || prevData.Services,
          }));
        } else {
          console.error("Ошибка получения данных с сервера");
        }
      } catch (error) {
        console.error("Ошибка запроса данных:", error);
      }
    };



    const fetchMainData = async () => {
      try {
        const response = await fetch(
          `${process.env.REACT_APP_API_URL}api/main-screen?locale=${selectedLocale}`
        );
        if (response.ok) {
          const result = await response.json();
          const fetchedData = result.data;

          setMainData((prevData) => ({
            ...prevData,
            Name: fetchedData.Name || prevData.Name,
            Description: fetchedData.Description || prevData.Description,
            Consultation_button:
              fetchedData.Consultation_button || prevData.Consultation_button,
            Promo_text0: fetchedData.Promo_text0 || prevData.Promo_text0,
            Promo_text1: fetchedData.Promo_text1 || prevData.Promo_text1,
            Card0: fetchedData.Card0 || prevData.Card0,
            Card1: fetchedData.Card1 || prevData.Card1,
            Card2: fetchedData.Card2 || prevData.Card2,
          }));
        } else {
          console.error("Ошибка получения данных с сервера");
        }
      } catch (error) {
        console.error("Ошибка запроса данных:", error);
      }
    };

    const fetchServiceData = async () => {
      try {
        const response = await fetch(
          `${process.env.REACT_APP_API_URL}api/service?locale=${selectedLocale}`
        );
        if (response.ok) {
          const result = await response.json();
          const fetchedData = result.data;

          setServiceData((prevData) => ({
            ...prevData,
            Service1: {
              title: fetchedData.Tik_tok_ads_title || prevData.Service1.title,
              description: fetchedData.Tik_tok_ads_description || prevData.Service1.description,
              item1: fetchedData.Tik_tok_ads_card_1 || prevData.Service1.item1,
              item2: fetchedData.Tik_tok_ads_card_2 || prevData.Service1.item2,
              item3: fetchedData.Tik_tok_ads_card_3 || prevData.Service1.item3,
              item4: fetchedData.Tik_tok_ads_card_4 || prevData.Service1.item4,
              includes_button: fetchedData.Includes_button || prevData.Service1.includes_button,
              order_button: fetchedData.Order_button || prevData.Service1.order_button,
            },
            Service2: {
              title: fetchedData.Meta_ads_title || prevData.Service2.title,
              description: fetchedData.Meta_ads_description || prevData.Service2.description,
              item1: fetchedData.Tik_tok_ads_card_1 || prevData.Service2.item1,
              item2: fetchedData.Tik_tok_ads_card_2 || prevData.Service2.item2,
              item3: fetchedData.Tik_tok_ads_card_3 || prevData.Service2.item3,
              item4: fetchedData.Tik_tok_ads_card_4 || prevData.Service2.item4,
              order_button: fetchedData.Order_button || prevData.Service2.order_button,
            },
            Service3: {
              title: "SMM",
              item1: fetchedData.SMM_card_1 || prevData.Service3.item1,
              item2: fetchedData.SMM_card_2 || prevData.Service3.item2,
              item3: fetchedData.SMM_card_3 || prevData.Service3.item3,
              item4: fetchedData.SMM_card_4 || prevData.Service3.item4,
              item5: fetchedData.SMM_card_5 || prevData.Service3.item5,
              item6: fetchedData.SMM_card_6 || prevData.Service3.item6,
              includes_button: fetchedData.Includes_button || prevData.Service3.includes_button,
              order_button: fetchedData.Order_button || prevData.Service3.order_button,
            },
          }));
        } else {
          console.error("Ошибка получения данных с сервера");
        }
      } catch (error) {
        console.error("Ошибка запроса данных:", error);
      }
    };

    fetchMenuData();
    fetchMainData();
    fetchServiceData();
  }, [selectedLocale]);





  const handleMoveOver = (id) => {
    setIsHovered(true);
    setIsActiveCard(id);
  };

  const handleMoveLeave = () => {
    setIsHovered(false);
  };

  const handleMoveLeaveCard = (id) => {
    if (isHovered) {
      setIsHovered(false);
    } else if (isMobile) {
      setIsHovered(true);
      setIsActiveCard(id);
      if (isMobile) {
        const element = document.getElementById("Услуги");
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }
    }
  };

  React.useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 960);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      <section className={appStyle.section}>
        <div className={appStyle.headerBlock}>
          
          <div className={appStyle.description}>
            <label className={appStyle.HText}>{mainData.Name}</label>
            <span className={appStyle.descriptionText}>{mainData.Description}</span>
            <div className={appStyle.descriptionButton}>
              <div className={appStyle.button} onClick={setIsModalVisible}>
                <span>{mainData.Consultation_button}</span>
              </div>
              <div className={appStyle.state}>
                <img src={loaded} alt="access" />
                <span>{mainData.Promo_text0}</span>
              </div>
              <div className={appStyle.state}>
                <img src={loaded} alt="access" />
                <span>{mainData.Promo_text1}</span>
              </div>
            </div>
          </div>

          <div className={appStyle.visual}>
            <img
              className={appStyle.mercury}
              draggable="false"
              src={mercury}
              alt="mercury"
            />
            <div className={appStyle.addCard1}>
              <div className={appStyle.description}>
                <span>{mainData.Card0}</span>
              </div>
              <img draggable="false" src={apngSrc} alt="stat" />
            </div>
            <div className={appStyle.addCard2}>
              <div className={appStyle.description}>
                <span>{mainData.Card1}</span>
              </div>
              <div className={appStyle.lower}>
                <label></label>
                <div className={appStyle.image}>
                  <img draggable="false" src={equlizer} alt="stat" />
                </div>
              </div>
            </div>
            <div className={appStyle.addCard3}>

              <div className={appStyle.description}>
                <span>{mainData.Card2}</span>
              </div>

              <label className={appStyle.number}>40+</label>

            </div>
          </div>
        </div>
        <div className={appStyle.serviceBlock} id="Услуги">
          <div className={appStyle.Row}>
            <label>{menuData.Services}</label>
          </div>
          <div className={appStyle.serviceCards}>
            <div
              className={`${appStyle.upperCard} ${!isHovered
                  ? ""
                  : activeCard === 1
                    ? appStyle.active
                    : appStyle.hidden
                }`}
              {...(!isMobile && { onMouseOver: () => handleMoveOver(1) })}
              {...(!isMobile && { onMouseLeave: handleMoveLeave })}
              {...(isMobile && { onClick: () => handleMoveLeaveCard(1) })}
            >
              <header className={appStyle.header}>
                <label>{serviceData.Service1.title}</label>
                <span>{serviceData.Service1.description}</span>
              </header>
              <div className={appStyle.lower}>
                <span>{serviceData.Service1.includes_button}</span>
                <div className={appStyle.image}>
                  <img draggable="false" src={arrow} alt="arrow" />
                </div>
              </div>
              <div className={appStyle.cards}>
                <div className={appStyle.card}>
                  <header>
                    <div className={appStyle.image}>
                      <img draggable="false" src={aim} alt="tick" />
                    </div>
                  </header>
                  <div className={appStyle.text}>
                    {serviceData.Service1.item1}
                  </div>
                </div>
                <div className={appStyle.card}>
                  <header>
                    <div className={appStyle.image}>
                      <img draggable="false" src={settings} alt="tick" />
                    </div>
                  </header>
                  <div className={appStyle.text}>
                    {serviceData.Service1.item2}
                  </div>
                </div>
                <div className={appStyle.card}>
                  <header>
                    <div className={appStyle.image}>
                      <img draggable="false" src={pick} alt="tick" />
                    </div>
                  </header>
                  <div className={appStyle.text}>
                    {serviceData.Service1.item3}
                  </div>
                </div>
                <div className={appStyle.card}>
                  <header>
                    <div className={appStyle.image}>
                      <img draggable="false" src={tick} alt="tick" />
                    </div>
                  </header>
                  <div className={appStyle.text}>
                    {serviceData.Service1.item4}
                  </div>
                </div>
              </div>
              <div className={appStyle.orderBut} onClick={setIsModalVisible}>
                <span>{serviceData.Service1.order_button}</span>
              </div>
            </div>
            <div
              className={`${appStyle.downCard} ${!isHovered
                  ? ""
                  : activeCard === 2
                    ? appStyle.active
                    : appStyle.hidden
                }`}
              {...(!isMobile && { onMouseOver: () => handleMoveOver(2) })}
              {...(!isMobile && { onMouseLeave: handleMoveLeave })}
              {...(isMobile && { onClick: () => handleMoveLeaveCard(2) })}
            >
              <header className={appStyle.header}>
                <label>{serviceData.Service2.title}</label>
                <span>{serviceData.Service2.description}</span>
              </header>
              <div className={appStyle.lower}>
                {isMobile && <span>{serviceData.Service2.includes_button}</span>}
                <div className={appStyle.image}>
                  <img draggable="false" src={arrow} alt="arrow" />
                </div>
              </div>
              <div className={appStyle.cards}>
                <div className={appStyle.card}>
                  <header>
                    <div className={appStyle.image}>
                      <img draggable="false" src={aim} alt="tick" />
                    </div>
                  </header>
                  <div className={appStyle.text}>
                    {serviceData.Service2.item1}
                  </div>
                </div>
                <div className={appStyle.card}>
                  <header>
                    <div className={appStyle.image}>
                      <img draggable="false" src={settings} alt="tick" />
                    </div>
                  </header>
                  <div className={appStyle.text}>
                    {serviceData.Service2.item2}
                  </div>
                </div>
                <div className={appStyle.card}>
                  <header>
                    <div className={appStyle.image}>
                      <img draggable="false" src={pick} alt="tick" />
                    </div>
                  </header>
                  <div className={appStyle.text}>
                    {serviceData.Service2.item3}
                  </div>
                </div>
                <div className={appStyle.card}>
                  <header>
                    <div className={appStyle.image}>
                      <img draggable="false" src={tick} alt="tick" />
                    </div>
                  </header>
                  <div className={appStyle.text}>
                    {serviceData.Service2.item4}
                  </div>
                </div>
              </div>
              <div className={appStyle.orderBut} onClick={setIsModalVisible}>
                <span>{serviceData.Service2.order_button}</span>
              </div>
            </div>
            <div
              className={`${appStyle.rightCard} ${!isHovered
                  ? ""
                  : activeCard === 3
                    ? appStyle.active
                    : appStyle.hidden
                }`}
              {...(!isMobile && { onMouseOver: () => handleMoveOver(3) })}
              {...(!isMobile && { onMouseLeave: handleMoveLeave })}
              {...(isMobile && { onClick: () => handleMoveLeaveCard(3) })}
            >
              <div className={appStyle.bigCard}>
                <img
                  className={appStyle.bomb}
                  draggable="false"
                  src={bomb}
                  alt="mercury"
                />
                <header className={appStyle.header}>
                  <label>{serviceData.Service3.title}</label>
                </header>
                <div className={appStyle.lower}>
                  <span>{serviceData.Service3.includes_button}</span>
                  <div className={appStyle.image}>
                    <img draggable="false" src={arrow} alt="arrow" />
                  </div>
                </div>
                <div className={appStyle.cards}>
                  <div className={appStyle.card}>
                    <header>
                      <div className={appStyle.image}>
                        <img draggable="false" src={equlizer} alt="equlizer" />
                      </div>
                    </header>
                    <div className={appStyle.text}>
                      {serviceData.Service3.item1}
                    </div>
                  </div>
                  <div className={appStyle.card}>
                    <header>
                      <div className={appStyle.image}>
                        <img draggable="false" src={settings} alt="settings" />
                      </div>
                    </header>
                    <div className={appStyle.text}>
                      {serviceData.Service3.item2}
                    </div>
                  </div>
                  <div className={appStyle.card}>
                    <header>
                      <div className={appStyle.image}>
                        <img draggable="false" src={pazzle} alt="pazzle" />
                      </div>
                    </header>
                    <div className={appStyle.text}>
                      {serviceData.Service3.item3}
                    </div>
                  </div>
                  <div className={appStyle.card}>
                    <header>
                      <div className={appStyle.image}>
                        <img draggable="false" src={carouselIcon} alt="carousel" />
                      </div>
                    </header>
                    <div className={appStyle.text}>
                      {serviceData.Service3.item4}
                    </div>
                  </div>
                  <div className={appStyle.card}>
                    <header>
                      <div className={appStyle.image}>
                        <img draggable="false" src={photo} alt="photo" />
                      </div>
                    </header>
                    <div className={appStyle.text}>
                      {serviceData.Service3.item5}
                    </div>
                  </div>
                  <div className={appStyle.card}>
                    <header>
                      <div className={appStyle.image}>
                        <img draggable="false" src={tick} alt="tick" />
                      </div>
                    </header>
                    <div className={appStyle.text}>
                      {serviceData.Service3.item6}
                    </div>
                  </div>
                </div>
                <div className={appStyle.orderBut} onClick={setIsModalVisible}>
                  <span>{serviceData.Service3.order_button}</span>
                </div>
              </div>
            </div>
          </div>
        </div>


        <StageOfWork setIsModalVisible={setIsModalVisible} selectedLocale={selectedLocale} />
        <StageOfWorkSection selectedLocale={selectedLocale} />
        <Founders setIsModalVisible={setIsModalVisible} selectedLocale={selectedLocale} />
        <FooterContact selectedLocale={selectedLocale} />
      </section>
    </>
  );
};

export default HeaderSection;
