import React from "react";
import appStyle from "../scss/app.module.scss";
import arrow from "../assets/img/Arrow.webp";
import radio from "../assets/img/radio.webp";
import car from "../assets/img/car.webp";
import desk from "../assets/img/desk.webp";
import comp from "../assets/img/comp.webp";

const StageOfWorkSection = () => {
  const [activeCard, setIsActiveCard] = React.useState(0);
  const [isClicked, setIsClicked] = React.useState(false);

  const handleClick = (id) => {
    if (isClicked) return;
    setIsClicked(true);
    setIsActiveCard(id);
  };

  const handleClickLeave = () => {
    setIsActiveCard(0);
    setIsClicked(false);
    console.log(isClicked);
  };
  return (
    <section className={appStyle.section}>
      <div className={appStyle.caseBlock} id="Портфолио">
        <div className={appStyle.Row}>
          <label>Кейсы</label>
        </div>
        <div className={appStyle.caseCards}>
          <div
            className={`${appStyle.upperLeftCard} ${
              activeCard === 1
                ? appStyle.active
                : isClicked
                ? appStyle.hidden
                : ""
            }`}
            onClick={() => handleClick(1)}
          >
            <header className={appStyle.header}>
              <label>Реклама концертов “Гио Пики” и “Метели”</label>
            </header>
            <div className={appStyle.lower}>
              <span>01</span>
            </div>
            <div className={appStyle.contentBox}>
              <div className={appStyle.leftSide}>
                <div className={appStyle.image}>
                  <img draggable="false" src={radio} alt="radio" />
                </div>
              </div>
              <div className={appStyle.rightSide}>
                <div
                  className={`${appStyle.rowList} ${
                    activeCard === 1
                      ? appStyle.active
                      : isClicked
                      ? appStyle.hidden
                      : ""
                  }`}
                >
                  <div className={appStyle.row}>
                    <label className={appStyle.header}>Описание</label>
                    <span className={appStyle.description}>
                      Реклама концертов различных исполнителей в Европе
                    </span>
                  </div>
                  <div className={appStyle.row}>
                    <label className={appStyle.header}>Описание</label>
                    <span className={appStyle.description}>
                      Реклама концертов различных исполнителей в Европе
                    </span>
                  </div>
                  <div className={appStyle.row}>
                    <label className={appStyle.header}>Описание</label>
                    <span className={appStyle.description}>
                      Реклама концертов различных исполнителей в Европе
                    </span>
                  </div>
                  <div className={appStyle.row}>
                    <label className={appStyle.header}>Описание</label>
                    <span className={appStyle.description}>
                      Реклама концертов различных исполнителей в Европе
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className={appStyle.backBut}>
              <div className={appStyle.image} onClick={handleClickLeave}>
                <img draggable="false" src={arrow} alt="arrow" />
              </div>
            </div>
          </div>
          <div
            className={`${appStyle.downLeftCard} ${
              activeCard === 3
                ? appStyle.active
                : isClicked
                ? appStyle.hidden
                : ""
            }`}
            onClick={() => handleClick(3)}
          >
            <header className={appStyle.header}>
              <label>Удароустойчивые столешницы Getalit</label>
            </header>
            <div className={appStyle.lower}>
              <span>03</span>
            </div>
            <div className={appStyle.contentBox}>
              <div className={appStyle.leftSide}>
                <div className={appStyle.image}>
                  <img draggable="false" src={desk} alt="radio" />
                </div>
              </div>
              <div className={appStyle.rightSide}>
                <div
                  className={`${appStyle.rowList} ${
                    activeCard === 3
                      ? appStyle.active
                      : isClicked
                      ? appStyle.hidden
                      : ""
                  }`}
                >
                  <div className={appStyle.row}>
                    <label className={appStyle.header}>Описание</label>
                    <span className={appStyle.description}>
                      Реклама концертов различных исполнителей в Европе
                    </span>
                  </div>
                  <div className={appStyle.row}>
                    <label className={appStyle.header}>Описание</label>
                    <span className={appStyle.description}>
                      Реклама концертов различных исполнителей в Европе
                    </span>
                  </div>
                  <div className={appStyle.row}>
                    <label className={appStyle.header}>Описание</label>
                    <span className={appStyle.description}>
                      Реклама концертов различных исполнителей в Европе
                    </span>
                  </div>
                </div>
                <div className={appStyle.cards}>
                  <div className={appStyle.card}>
                    <div className={appStyle.HText}>
                      <span>Потрачено</span>
                    </div>
                    <div className={appStyle.value}>
                      <span>2440$</span>
                    </div>
                  </div>
                  <div className={appStyle.card}>
                    <div className={appStyle.HText}>
                      <span>Средняя цена заявка</span>
                    </div>
                    <div className={appStyle.value}>
                      <span>5.2$</span>
                    </div>
                  </div>
                  <div className={appStyle.card}>
                    <div className={appStyle.HText}>
                      <span>Лучшая цена заявки</span>
                    </div>
                    <div className={appStyle.value}>
                      <span>4.1$</span>
                    </div>
                  </div>
                  <div className={appStyle.card}>
                    <div className={appStyle.HText}>
                      <span>Получено заявок</span>
                    </div>
                    <div className={appStyle.value}>
                      <span>384</span>
                    </div>
                  </div>
                  <div className={appStyle.card}>
                    <div className={appStyle.HText}>
                      <span>Новых подписок</span>
                    </div>
                    <div className={appStyle.value}>
                      <span>512</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className={appStyle.backBut}>
              <div className={appStyle.image} onClick={handleClickLeave}>
                <img draggable="false" src={arrow} alt="arrow" />
              </div>
            </div>
          </div>
          <div
            className={`${appStyle.upperRightCard} ${
              activeCard === 2
                ? appStyle.active
                : isClicked
                ? appStyle.hidden
                : ""
            }`}
            onClick={() => handleClick(2)}
          >
            <header className={appStyle.header}>
              <label>Автосервис Real Auto</label>
            </header>
            <div className={appStyle.lower}>
              <span>02</span>
            </div>
            <div className={appStyle.contentBox}>
              <div className={appStyle.leftSide}>
                <div className={appStyle.image}>
                  <img draggable="false" src={car} alt="desk" />
                </div>
              </div>
              <div className={appStyle.rightSide}>
                <div
                  className={`${appStyle.rowList} ${
                    activeCard === 2
                      ? appStyle.active
                      : isClicked
                      ? appStyle.hidden
                      : ""
                  }`}
                >
                  <div className={appStyle.row}>
                    <label className={appStyle.header}>Описание</label>
                    <span className={appStyle.description}>
                      Реклама концертов различных исполнителей в Европе
                    </span>
                  </div>
                  <div className={appStyle.row}>
                    <label className={appStyle.header}>Описание</label>
                    <span className={appStyle.description}>
                      Реклама концертов различных исполнителей в Европе
                    </span>
                  </div>
                  <div className={appStyle.row}>
                    <label className={appStyle.header}>Описание</label>
                    <span className={appStyle.description}>
                      Реклама концертов различных исполнителей в Европе
                    </span>
                  </div>
                </div>
                <div className={appStyle.cards}>
                  <div className={appStyle.card}>
                    <div className={appStyle.HText}>
                      <span>Потрачено</span>
                    </div>
                    <div className={appStyle.value}>
                      <span>2440$</span>
                    </div>
                  </div>
                  <div className={appStyle.card}>
                    <div className={appStyle.HText}>
                      <span>Средняя цена заявка</span>
                    </div>
                    <div className={appStyle.value}>
                      <span>5.2$</span>
                    </div>
                  </div>
                  <div className={appStyle.card}>
                    <div className={appStyle.HText}>
                      <span>Лучшая цена заявки</span>
                    </div>
                    <div className={appStyle.value}>
                      <span>4.1$</span>
                    </div>
                  </div>
                  <div className={appStyle.card}>
                    <div className={appStyle.HText}>
                      <span>Получено заявок</span>
                    </div>
                    <div className={appStyle.value}>
                      <span>384</span>
                    </div>
                  </div>
                  <div className={appStyle.card}>
                    <div className={appStyle.HText}>
                      <span>Новых подписок</span>
                    </div>
                    <div className={appStyle.value}>
                      <span>512</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className={appStyle.backBut}>
              <div className={appStyle.image} onClick={handleClickLeave}>
                <img draggable="false" src={arrow} alt="arrow" />
              </div>
            </div>
          </div>
          <div
            className={`${appStyle.downRightCard} ${
              activeCard === 4
                ? appStyle.active
                : isClicked
                ? appStyle.hidden
                : ""
            }`}
            onClick={() => handleClick(4)}
          >
            <header className={appStyle.header}>
              <label>Приложение-планер The Path </label>
            </header>
            <div className={appStyle.lower}>
              <span>04</span>
            </div>
            <div className={appStyle.contentBox}>
              <div className={appStyle.leftSide}>
                <div className={appStyle.image}>
                  <img draggable="false" src={comp} alt="desk" />
                </div>
              </div>
              <div className={appStyle.rightSide}>
                <div
                  className={`${appStyle.rowList} ${
                    activeCard === 4
                      ? appStyle.active
                      : isClicked
                      ? appStyle.hidden
                      : ""
                  }`}
                >
                  <div className={appStyle.row}>
                    <label className={appStyle.header}>Описание</label>
                    <span className={appStyle.description}>
                      Реклама концертов различных исполнителей в Европе
                    </span>
                  </div>
                  <div className={appStyle.row}>
                    <label className={appStyle.header}>Описание</label>
                    <span className={appStyle.description}>
                      Реклама концертов различных исполнителей в Европе
                    </span>
                  </div>
                  <div className={appStyle.row}>
                    <label className={appStyle.header}>Описание</label>
                    <span className={appStyle.description}>
                      Реклама концертов различных исполнителей в Европе
                    </span>
                  </div>
                </div>
                <div className={appStyle.cards}>
                  <div className={appStyle.card}>
                    <div className={appStyle.HText}>
                      <span>Потрачено</span>
                    </div>
                    <div className={appStyle.value}>
                      <span>2440$</span>
                    </div>
                  </div>
                  <div className={appStyle.card}>
                    <div className={appStyle.HText}>
                      <span>Средняя цена заявка</span>
                    </div>
                    <div className={appStyle.value}>
                      <span>5.2$</span>
                    </div>
                  </div>
                  <div className={appStyle.card}>
                    <div className={appStyle.HText}>
                      <span>Лучшая цена заявки</span>
                    </div>
                    <div className={appStyle.value}>
                      <span>4.1$</span>
                    </div>
                  </div>
                  <div className={appStyle.card}>
                    <div className={appStyle.HText}>
                      <span>Получено заявок</span>
                    </div>
                    <div className={appStyle.value}>
                      <span>384</span>
                    </div>
                  </div>
                  <div className={appStyle.card}>
                    <div className={appStyle.HText}>
                      <span>Новых подписок</span>
                    </div>
                    <div className={appStyle.value}>
                      <span>512</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className={appStyle.backBut}>
              <div className={appStyle.image} onClick={handleClickLeave}>
                <img draggable="false" src={arrow} alt="arrow" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StageOfWorkSection;
