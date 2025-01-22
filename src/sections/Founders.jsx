import React, { useRef, useEffect } from "react";
import appStyle from "../scss/app.module.scss";

import like from "../assets/img/like.webp";
import evgen from "../assets/img/Evgen.webp";
import georgiy from "../assets/img/georgi.webp";
import dima from "../assets/img/portraitDima.webp";
import arrowLeft from "../assets/img/arrow Left.png";
import arrowRight from "../assets/img/arrow Right.png";
import Reviews from "./Reviews";
import FormSection from "./FormSection";

const Founders = ({ setIsModalVisible, selectedLocale }) => {
  const [currentIndex, setCurrentIndex] = React.useState(0);
  const [isAnimating, setIsAnimating] = React.useState(false);
  const [isPaused, setIsPaused] = React.useState(false);
  const firstRowRef = useRef(null);
  const secondRowRef = useRef(null);
  const [foundersData, setFoundersData] = React.useState([
    {
      name: "Евгений Полудень",
      headerLabel: "Сооснователь и Генеральный директор",
      headerSpan: "Евгений Полудень",
      description: `Специалист в области <b>диджитал-маркетинга</b> более чем с <b>5-ти летним опытом.</b> Его глубокие технические знания помогли создать и развить наше агентство. Евгений фокусируется на <b>стратегическом развитии бизнеса</b> и постоянном улучшении наших услуг.`,
      image: evgen,
    },
    {
      name: "Георгий Залецкий",
      headerLabel: "Сооснователь и Директор по клиентским отношениям",
      headerSpan: "Георгий Залецкий",
      description: `<b>Эксперт по работе с клиентами с многолетним стажем</b>. Его способность <b>понимать потребности клиентов</b> и создавать персонализированные стратегии - ключ к <b>успеху нашего агенства.</b> Георгий управляет клиентскими проектами и стремится к установлению <b>долгосрочных партнерских отношений.</b>`,
      image: georgiy,
    },
  ]);
  const [title, setTitle] = React.useState("Основатели"); // Добавлено состояние для заголовка

  React.useEffect(() => {
    const fetchFoundersData = async () => {
      try {
        const response = await fetch(
          `${process.env.REACT_APP_API_URL}api/founder?locale=${selectedLocale}`
        );
        if (response.ok) {
          const result = await response.json();
          const data = result.data;

          // Устанавливаем заголовок из данных
          setTitle(data.Foundes_title);

          setFoundersData([
            {
              name: data.Foundes_name,
              headerLabel: data.Foundes_position,
              headerSpan: data.Foundes_name,
              description: data.Foundes_description,
              image: evgen,
            },
            {
              name: data.Foundes_name2,
              headerLabel: data.Foundes_position2,
              headerSpan: data.Foundes_name2,
              description: data.Foundes_description2,
              image: georgiy,
            },
          ]);
        } else {
          console.error("Ошибка получения данных с сервера");
        }
      } catch (error) {
        console.error("Ошибка запроса данных:", error);
      }
    };

    fetchFoundersData();
  }, [selectedLocale]);

  useEffect(() => {
    if (firstRowRef.current && secondRowRef.current) {
      const firstRow = firstRowRef.current;
      const secondRow = secondRowRef.current;

      if (isPaused) {
        firstRow.style.animationPlayState = "paused";
        secondRow.style.animationPlayState = "paused";
      } else {
        firstRow.style.animationPlayState = "running";
        secondRow.style.animationPlayState = "running";
      }
    }
  }, [isPaused]);

  const handleMouseEnter = () => {
    setIsPaused(true);
  };

  const handleMouseLeave = () => {
    setIsPaused(false);
  };

  const handlePrevClick = () => {
    setIsAnimating(true);
    setTimeout(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === 0 ? foundersData.length - 1 : prevIndex - 1
      );
      setIsAnimating(false);
    }, 300);
  };

  const handleNextClick = () => {
    setIsAnimating(true);
    setTimeout(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === foundersData.length - 1 ? 0 : prevIndex + 1
      );
      setIsAnimating(false);
    }, 300);
  };

  const currentPerson =
    foundersData.length > 0 ? foundersData[currentIndex] : foundersData[0];

  return (
    <section className={appStyle.section}>
      <div className={appStyle.foundersBlock}>
        <div className={appStyle.Row}>
          <label>{title}</label> {/* Используем заголовок из данных */}
        </div>
        <div className={appStyle.image}>
          <img
            className={isAnimating ? appStyle.fadeOut : appStyle.fadeIn}
            draggable="false"
            src={currentPerson.image}
            alt={currentPerson.name}
          />
        </div>
        <span className={appStyle.name}>
          <span>{currentPerson.name}</span>
          <span>{currentPerson.name}</span>
          <span>{currentPerson.name}</span>
        </span>
        <div
          className={`${appStyle.descriptionContainer} ${isAnimating ? appStyle.fadeOut : appStyle.fadeIn
            }`}
        >
          <div className={appStyle.header}>
            <label>{currentPerson.headerLabel}</label>
            <span>{currentPerson.headerSpan}</span>
          </div>
          <div
            className={appStyle.description}
            dangerouslySetInnerHTML={{ __html: currentPerson.description }}
          />
        </div>
        <div className={appStyle.reviewNav}>
          <button className={appStyle.buttonPrev} onClick={handlePrevClick}>
            <img draggable="false" src={arrowLeft} />
          </button>
          <button className={appStyle.buttonNext} onClick={handleNextClick}>
            <img draggable="false" src={arrowRight} />
          </button>
        </div>
      </div>

      <Reviews selectedLocale={selectedLocale} />
      {/* 
      <div className={appStyle.formButton}>
        <div className={appStyle.label}>
          <label>Заполни форму</label>
          <span>и получи бесплатную консультацию</span>
        </div>
        <div className={appStyle.buttonLayout}>
          <div className={appStyle.button} onClick={setIsModalVisible}>
            <img draggable="false" src={arrow} alt="arrow" />
          </div>
        </div>
      </div> */}

      <FormSection
        setIsModalVisible={setIsModalVisible}
        selectedLocale={selectedLocale}
      />
    </section>
  );
};

export default Founders;
