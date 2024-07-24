import React from "react";
import appStyle from "../scss/app.module.scss";
import arrow from "../assets/img/Arrow.png";
import radio from "../assets/img/radio.webp";
import car from "../assets/img/car.webp";
import desk from "../assets/img/desk.webp";
import comp from "../assets/img/comp.webp";
import { useDispatch, useSelector } from "react-redux";
import { fetchCards } from "../Redux/cardSlice";

const StageOfWorkSection = () => {
  const [activeCard, setIsActiveCard] = React.useState(0);
  const [isClicked, setIsClicked] = React.useState(false);
  const [isMobile, setIsMobile] = React.useState(window.innerWidth <= 960);
  const { cards } = useSelector((state) => state.cards);
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(fetchCards());
  }, []);

  const handleClick = (id) => {
    if (isClicked) return;
    setIsClicked(true);
    setIsActiveCard(id);
    if (isMobile) {
      const element = document.getElementById("Портфолио");
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  const handleClickLeave = () => {
    setIsActiveCard(0);
    setIsClicked(false);
  };

  const handleClickLeaveSection = () => {
    if (isClicked) {
      setIsActiveCard(0);
      setIsClicked(false);
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
    <section className={appStyle.section} onClick={handleClickLeaveSection}>
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
              <label>{cards.length > 0 && cards[0].header}</label>
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
                    <label className={appStyle.header}>
                      {cards.length > 0 && cards[0].description[0].header}
                    </label>
                    <span className={appStyle.description}>
                      {cards.length > 0 && cards[0].description[0].text}
                    </span>
                  </div>
                  <div className={appStyle.row}>
                    <label className={appStyle.header}>
                      {cards.length > 0 && cards[0].description[1].header}
                    </label>
                    <span className={appStyle.description}>
                      {cards.length > 0 && cards[0].description[1].text}
                    </span>
                  </div>
                  <div className={appStyle.row}>
                    <label className={appStyle.header}>
                      {cards.length > 0 && cards[0].description[2].header}
                    </label>
                    <span className={appStyle.description}>
                      {cards.length > 0 && cards[0].description[2].text}
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
              <label>{cards.length > 0 && cards[2].header}</label>
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
                    <label className={appStyle.header}>
                      {cards.length > 0 && cards[2].description[0].header}
                    </label>
                    <span className={appStyle.description}>
                      {cards.length > 0 && cards[2].description[0].text}
                    </span>
                  </div>
                  <div className={appStyle.row}>
                    <label className={appStyle.header}>
                      {cards.length > 0 && cards[2].description[1].header}
                    </label>
                    <span className={appStyle.description}>
                      {cards.length > 0 && cards[2].description[1].text}
                    </span>
                  </div>
                  <div className={appStyle.row}>
                    <label className={appStyle.header}>
                      {cards.length > 0 && cards[2].description[2].header}
                    </label>
                    <span className={appStyle.description}>
                      {cards.length > 0 && cards[2].description[2].text}
                    </span>
                  </div>
                </div>
                <div className={appStyle.cards}>
                  <div className={appStyle.card}>
                    <div className={appStyle.HText}>
                      <span>
                        {cards.length > 0 && cards[2].cards[0].header}
                      </span>
                    </div>
                    <div className={appStyle.value}>
                      <span>{cards.length > 0 && cards[2].cards[0].text}</span>
                    </div>
                  </div>
                  <div className={appStyle.card}>
                    <div className={appStyle.HText}>
                      <span>
                        {cards.length > 0 && cards[2].cards[1].header}
                      </span>
                    </div>
                    <div className={appStyle.value}>
                      <span>{cards.length > 0 && cards[2].cards[1].text}</span>
                    </div>
                  </div>
                  <div className={appStyle.card}>
                    <div className={appStyle.HText}>
                      {cards.length > 0 && cards[2].cards[2].header}
                    </div>
                    <div className={appStyle.value}>
                      <span>{cards.length > 0 && cards[2].cards[2].text}</span>
                    </div>
                  </div>
                  <div className={appStyle.card}>
                    <div className={appStyle.HText}>
                      {cards.length > 0 && cards[2].cards[3].header}
                    </div>
                    <div className={appStyle.value}>
                      <span>{cards.length > 0 && cards[2].cards[3].text}</span>
                    </div>
                  </div>
                  <div className={appStyle.card}>
                    <div className={appStyle.HText}>
                      {cards.length > 0 && cards[2].cards[4].header}
                    </div>
                    <div className={appStyle.value}>
                      <span>{cards.length > 0 && cards[2].cards[4].text}</span>
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
              <label>{cards.length > 0 && cards[1].header}</label>
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
                    <label className={appStyle.header}>
                      {cards.length > 0 && cards[1].description[0].header}
                    </label>
                    <span className={appStyle.description}>
                      {cards.length > 0 && cards[1].description[0].text}
                    </span>
                  </div>
                  <div className={appStyle.row}>
                    <label className={appStyle.header}>
                      {cards.length > 0 && cards[1].description[1].header}
                    </label>
                    <span className={appStyle.description}>
                      {cards.length > 0 && cards[1].description[1].text}
                    </span>
                  </div>
                  <div className={appStyle.row}>
                    <label className={appStyle.header}>
                      {cards.length > 0 && cards[1].description[2].header}
                    </label>
                    <span className={appStyle.description}>
                      {cards.length > 0 && cards[1].description[2].text}
                    </span>
                  </div>
                </div>
                <div className={appStyle.cards}>
                  <div className={appStyle.card}>
                    <div className={appStyle.HText}>
                      <span>
                        {cards.length > 0 && cards[1].cards[0].header}
                      </span>
                    </div>
                    <div className={appStyle.value}>
                      <span>{cards.length > 0 && cards[1].cards[0].text}</span>
                    </div>
                  </div>
                  <div className={appStyle.card}>
                    <div className={appStyle.HText}>
                      <span>
                        {cards.length > 0 && cards[1].cards[1].header}
                      </span>
                    </div>
                    <div className={appStyle.value}>
                      <span>{cards.length > 0 && cards[1].cards[1].text}</span>
                    </div>
                  </div>
                  <div className={appStyle.card}>
                    <div className={appStyle.HText}>
                      <span>
                        {cards.length > 0 && cards[1].cards[2].header}
                      </span>
                    </div>
                    <div className={appStyle.value}>
                      <span>{cards.length > 0 && cards[1].cards[2].text}</span>
                    </div>
                  </div>
                  <div className={appStyle.card}>
                    <div className={appStyle.HText}>
                      <span>
                        {cards.length > 0 && cards[1].cards[3].header}
                      </span>
                    </div>
                    <div className={appStyle.value}>
                      <span>{cards.length > 0 && cards[1].cards[3].text}</span>
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
              <label>{cards.length > 0 && cards[3].header}</label>
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
                    <label className={appStyle.header}>
                      {cards.length > 0 && cards[3].description[0].header}
                    </label>
                    <span className={appStyle.description}>
                      {cards.length > 0 && cards[3].description[0].text}
                    </span>
                  </div>
                  <div className={appStyle.row}>
                    <label className={appStyle.header}>
                      {cards.length > 0 && cards[3].description[1].header}
                    </label>
                    <span className={appStyle.description}>
                      {cards.length > 0 && cards[3].description[1].text}
                    </span>
                  </div>
                  <div className={appStyle.row}>
                    <label className={appStyle.header}>
                      {cards.length > 0 && cards[3].description[2].header}
                    </label>
                    <span className={appStyle.description}>
                      {cards.length > 0 && cards[3].description[2].text}
                    </span>
                  </div>
                </div>
                <div className={appStyle.cards}>
                  <div className={appStyle.card}>
                    <div className={appStyle.HText}>
                      <span>
                        {cards.length > 0 && cards[3].cards[0].header}
                      </span>
                    </div>
                    <div className={appStyle.value}>
                      <span>{cards.length > 0 && cards[3].cards[0].text}</span>
                    </div>
                  </div>
                  <div className={appStyle.card}>
                    <div className={appStyle.HText}>
                      <span>
                        {cards.length > 0 && cards[3].cards[1].header}
                      </span>
                    </div>
                    <div className={appStyle.value}>
                      <span>{cards.length > 0 && cards[3].cards[1].text}</span>
                    </div>
                  </div>
                  <div className={appStyle.card}>
                    <div className={appStyle.HText}>
                      <span>
                        {cards.length > 0 && cards[3].cards[2].header}
                      </span>
                    </div>
                    <div className={appStyle.value}>
                      <span>{cards.length > 0 && cards[3].cards[2].text}</span>
                    </div>
                  </div>
                  <div className={appStyle.card}>
                    <div className={appStyle.HText}>
                      <span>
                        {cards.length > 0 && cards[3].cards[3].header}
                      </span>
                    </div>
                    <div className={appStyle.value}>
                      <span>{cards.length > 0 && cards[3].cards[3].text}</span>
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
