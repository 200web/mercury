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
import arrow from "../assets/img/Arrow.webp";
import StageOfWork from "../components/StageWork";
import FooterContact from "../components/FooterContact";
import Founders from "./Founders";
import StageOfWorkSection from "./StageOfWorkSection";

const HeaderSection = ({ setIsModalVisible }) => {
  const [activeCard, setIsActiveCard] = React.useState(0);
  const [isHovered, setIsHovered] = React.useState(false);

  const timestamp = new Date().getTime();
  const apngSrc = `${stat}?${timestamp}`;

  const handleMoveOver = (id) => {
    setIsHovered(true);
    setIsActiveCard(id);
  };

  const handleMoveLeave = () => {
    setIsHovered(false);
  };

  const handleMoveLeaveCard = () => {
    if (isHovered) {
      setIsHovered(false);
    }
  };

  return (
    <>
      <section className={appStyle.section}>
        <div className={appStyle.headerBlock}>
          <div className={appStyle.description}>
            <label className={appStyle.HText}>Mercury Arts</label>
            <span className={appStyle.description}>
              Помогаем бизнесу продавать свои товары и услуги в соцсетях
            </span>
            <div className={appStyle.descriptionButton}>
              <div className={appStyle.button} onClick={setIsModalVisible}>
                <span>Бесплатная консультация</span>
              </div>
              <div className={appStyle.state}>
                <img src={loaded} alt="access" />
                <span>сейчас</span>
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
                <span>Увеличиваем продажи</span>
              </div>
              <img draggable="false" src={apngSrc} alt="stat" />
            </div>
            <div className={appStyle.addCard2}>
              <div className={appStyle.description}>
                <span>Работаем на рынках</span>
              </div>
              <div className={appStyle.lower}>
                <label>EU USA</label>
                <div className={appStyle.image}>
                  <img draggable="false" src={equlizer} alt="stat" />
                </div>
              </div>
            </div>
            <div className={appStyle.addCard3}>
              <div className={appStyle.description}>
                <span>Опыт работы в различных нишах</span>
              </div>
              <label className={appStyle.number}>40+</label>
            </div>
          </div>
        </div>
        <div className={appStyle.serviceBlock} id="Услуги">
          <div className={appStyle.Row}>
            <label>Услуги</label>
          </div>
          <div className={appStyle.serviceCards}>
            <div
              className={`${appStyle.upperCard} ${
                !isHovered
                  ? ""
                  : activeCard === 1
                  ? appStyle.active
                  : appStyle.hidden
              }`}
              onMouseOver={() => handleMoveOver(1)}
              onMouseLeave={handleMoveLeave}
              onClick={handleMoveLeaveCard}
            >
              <header className={appStyle.header}>
                <label>TikTok Ads</label>
                <span>Реклама в TikTok</span>
              </header>
              <div className={appStyle.lower}>
                <span>Включает в себя</span>
                <div className={appStyle.image} onClick={handleMoveLeave}>
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
                    Разработка рекламной стратегии и продвижение в соцсетях (1
                    месяц)
                  </div>
                </div>
                <div className={appStyle.card}>
                  <header>
                    <div className={appStyle.image}>
                      <img draggable="false" src={settings} alt="tick" />
                    </div>
                  </header>
                  <div className={appStyle.text}>
                    Платные вспомогательные софты
                  </div>
                </div>
                <div className={appStyle.card}>
                  <header>
                    <div className={appStyle.image}>
                      <img draggable="false" src={pick} alt="tick" />
                    </div>
                  </header>
                  <div className={appStyle.text}>
                    Неограниченное количество фото и видео-объявлений 
                  </div>
                </div>
                <div className={appStyle.card}>
                  <header>
                    <div className={appStyle.image}>
                      <img draggable="false" src={tick} alt="tick" />
                    </div>
                  </header>
                  <div className={appStyle.text}>
                    Отчетность по результатам рекламной кампании и формирование
                    дальнейшей стратегии
                  </div>
                </div>
              </div>
              <div className={appStyle.orderBut} onClick={setIsModalVisible}>
                <span>Заказать</span>
              </div>
            </div>
            <div
              className={`${appStyle.downCard} ${
                !isHovered
                  ? ""
                  : activeCard === 2
                  ? appStyle.active
                  : appStyle.hidden
              }`}
              onMouseOver={() => handleMoveOver(2)}
              onMouseLeave={handleMoveLeave}
              onClick={handleMoveLeaveCard}
            >
              <header className={appStyle.header}>
                <label>Meta Ads</label>
                <span>Реклама в Instagram и Facebook</span>
              </header>
              <div className={appStyle.lower}>
                <div className={appStyle.image} onClick={handleMoveLeave}>
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
                    Разработка рекламной стратегии и продвижение в соцсетях (1
                    месяц)
                  </div>
                </div>
                <div className={appStyle.card}>
                  <header>
                    <div className={appStyle.image}>
                      <img draggable="false" src={settings} alt="tick" />
                    </div>
                  </header>
                  <div className={appStyle.text}>
                    Платные вспомогательные софты
                  </div>
                </div>
                <div className={appStyle.card}>
                  <header>
                    <div className={appStyle.image}>
                      <img draggable="false" src={pick} alt="tick" />
                    </div>
                  </header>
                  <div className={appStyle.text}>
                    Неограниченное количество фото и видео-объявлений 
                  </div>
                </div>
                <div className={appStyle.card}>
                  <header>
                    <div className={appStyle.image}>
                      <img draggable="false" src={tick} alt="tick" />
                    </div>
                  </header>
                  <div className={appStyle.text}>
                    Отчетность по результатам рекламной кампании и формирование
                    дальнейшей стратегии
                  </div>
                </div>
              </div>
              <div className={appStyle.orderBut} onClick={setIsModalVisible}>
                <span>Заказать</span>
              </div>
            </div>
            <div
              className={`${appStyle.rightCard} ${
                !isHovered
                  ? ""
                  : activeCard === 3
                  ? appStyle.active
                  : appStyle.hidden
              }`}
              onMouseOver={() => handleMoveOver(3)}
              onMouseLeave={handleMoveLeave}
              onClick={handleMoveLeaveCard}
            >
              <div className={appStyle.bigCard}>
                <img
                  className={appStyle.bomb}
                  draggable="false"
                  src={bomb}
                  alt="mercury"
                />
                <header className={appStyle.header}>
                  <label>SMM</label>
                </header>
                <div className={appStyle.lower}>
                  <span>Включает в себя</span>
                  <div className={appStyle.image} onClick={handleMoveLeave}>
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
                      Создание контент-плана, темы и идеи для постов и reels
                    </div>
                  </div>
                  <div className={appStyle.card}>
                    <header>
                      <div className={appStyle.image}>
                        <img draggable="false" src={settings} alt="settings" />
                      </div>
                    </header>
                    <div className={appStyle.text}>
                      Написание продающих и вовлекающих постов для повышения
                      активности
                    </div>
                  </div>
                  <div className={appStyle.card}>
                    <header>
                      <div className={appStyle.image}>
                        <img draggable="false" src={pazzle} alt="pazzle" />
                      </div>
                    </header>
                    <div className={appStyle.text}>
                      Создание бренд-бука: hightlights, визуал, описание и т.п.
                    </div>
                  </div>
                  <div className={appStyle.card}>
                    <header>
                      <div className={appStyle.image}>
                        <img
                          draggable="false"
                          src={carouselIcon}
                          alt="carousel"
                        />
                      </div>
                    </header>
                    <div className={appStyle.text}>
                      Публикация контента в профиль
                    </div>
                  </div>
                  <div className={appStyle.card}>
                    <header>
                      <div className={appStyle.image}>
                        <img draggable="false" src={photo} alt="photo" />
                      </div>
                    </header>
                    <div className={appStyle.text}>Съемки по запросу </div>
                  </div>
                  <div className={appStyle.card}>
                    <header>
                      <div className={appStyle.image}>
                        <img draggable="false" src={tick} alt="tick" />
                      </div>
                    </header>
                    <div className={appStyle.text}>Отчетность</div>
                  </div>
                </div>
                <div className={appStyle.orderBut} onClick={setIsModalVisible}>
                  <span>Заказать</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <StageOfWork setIsModalVisible={setIsModalVisible} />
        <StageOfWorkSection />
        <Founders setIsModalVisible={setIsModalVisible} />
        <FooterContact />
      </section>
    </>
  );
};

export default HeaderSection;
