import React, { useRef } from "react";
import appStyle from "../scss/app.module.scss";
import arrow from "../assets/img/Arrow.webp";
import like from "../assets/img/like.webp";
import evgen from "../assets/img/Evgen.webp";
import georgiy from "../assets/img/georgi.webp";
import arrowLeft from "../assets/img/arrow Left.png";
import arrowRight from "../assets/img/arrow Right.png";

const Founders = ({ setIsModalVisible }) => {
  const [currentIndex, setCurrentIndex] = React.useState(0);
  const [isAnimating, setIsAnimating] = React.useState(false);
  const firstRowRef = useRef(null);
  const secondRowRef = useRef(null);
  const persons = [
    {
      name: "Евгений Полудень",
      headerLabel: "Сооснователь и Генеральный директор",
      headerSpan: "Евгений Полудень",
      description: `Опытный специалист в области <b>диджитал-маркетинга</b> с более чем <b>5 лет опыта.</b> Его глубокие технические знания помогли создать и развить наше агентство. Евгений фокусируется на <b>стратегическом развитии бизнеса</b> и постоянном улучшении наших услуг.`,
      image: evgen,
    },
    {
      name: "Георгий Залецкий",
      headerLabel: "Сооснователь и Директор по клиентским отношениям",
      headerSpan: "Георгий Залецкий",
      description: `<b>Экспертный по работе с клиентами с многолетним стажем</b>. Его способность <b>понимать потребности клиентов</b> и создавать персонализированные стратегии - ключ к <b>успеху нашего агенства.</b> Георгий управляет клиентскими проектами и стремится к установлению <b>долгосрочных партнерских отношений.</b>`,
      image: georgiy,
    },
  ];

  const [isPaused, setIsPaused] = React.useState(false);

  React.useEffect(() => {
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
        prevIndex === 0 ? persons.length - 1 : prevIndex - 1
      );
      setIsAnimating(false);
    }, 300);
  };

  const handleNextClick = () => {
    setIsAnimating(true);
    setTimeout(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === persons.length - 1 ? 0 : prevIndex + 1
      );
      setIsAnimating(false);
    }, 300);
  };

  const currentPerson = persons[currentIndex];

  return (
    <section className={appStyle.section}>
      <div className={appStyle.foundersBlock}>
        <div className={appStyle.Row}>
          <label>Founders</label>
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
          className={`${appStyle.descriptionContainer} ${
            isAnimating ? appStyle.fadeOut : appStyle.fadeIn
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
      <div className={appStyle.rewievsBlock}>
        <div className={appStyle.Row}>
          <label>Наши отзывы</label>
        </div>
        <div className={appStyle.rewievsCarousel}>
          <div className={appStyle.firstVertRow} ref={firstRowRef}>
            <div
              className={appStyle.card}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <div className={appStyle.reviewCardHeader}>
                <div className={appStyle.like}>
                  <img draggable="false" src={like} alt="like" />
                </div>
                <div className={appStyle.avatar}>
                  <img draggable="false" src="" />
                </div>
                <div className={appStyle.name}>
                  <label>Дмитрий</label>
                  <span>Автосервис</span>
                </div>
              </div>
              <div className={appStyle.reviewDescriptionText}>
                <p>
                  Ребята из Mercury Arts сделали для нас рекламу, которая
                  привлекла новых клиентов в наш автосервис. За короткое время
                  количество записей на обслуживание выросло, и мы довольны
                  результатом.
                </p>
              </div>
            </div>
            <div
              className={appStyle.card}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <div className={appStyle.reviewCardHeader}>
                <div className={appStyle.like}>
                  <img draggable="false" src={like} alt="like" />
                </div>
                <div className={appStyle.avatar}>
                  <img draggable="false" src="" />
                </div>
                <div className={appStyle.name}>
                  <label>Вадим</label>
                  <span>Приложение-планер</span>
                </div>
              </div>
              <div className={appStyle.reviewDescriptionText}>
                <p>
                  Большое спасибо, агентство отлично справилось с задачей.
                  Ребята всегда оперативно реагируют на запросы, и работать с
                  ними очень комфортно.
                </p>
              </div>
            </div>
            <div
              className={appStyle.card}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <div className={appStyle.reviewCardHeader}>
                <div className={appStyle.like}>
                  <img draggable="false" src={like} alt="like" />
                </div>
                <div className={appStyle.avatar}>
                  <img draggable="false" src="" />
                </div>
                <div className={appStyle.name}>
                  <label>Мария</label>
                  <span>Ресторан</span>
                </div>
              </div>
              <div className={appStyle.reviewDescriptionText}>
                <p>
                  Мы долго искали подрядчиков по соцсетям, и парни предложили
                  четкую стратегию, которая сработала! Теперь у нас стабильно
                  растет аудитория в профиле и полный зал по вечерам и выходным.
                  Рекомендуем!
                </p>
              </div>
            </div>
            <div
              className={appStyle.card}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <div className={appStyle.reviewCardHeader}>
                <div className={appStyle.like}>
                  <img draggable="false" src={like} alt="like" />
                </div>
                <div className={appStyle.avatar}>
                  <img draggable="false" src="" />
                </div>
                <div className={appStyle.name}>
                  <label>Игорь</label>
                  <span>Интернет-магазин одежды</span>
                </div>
              </div>
              <div className={appStyle.reviewDescriptionText}>
                <p>
                  Ребята из Mercury Arts помогли нам настроить конверсионные
                  кампании в Instagram и Facebook. Продажи выросли, планируем
                  расширять ассортимент товарок на рекламу. Отличная работа!
                </p>
              </div>
            </div>
          </div>
          <div className={appStyle.secondVertRow} ref={secondRowRef}>
            <div
              className={appStyle.card}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <div className={appStyle.reviewCardHeader}>
                <div className={appStyle.like}>
                  <img draggable="false" src={like} alt="like" />
                </div>
                <div className={appStyle.avatar}>
                  <img draggable="false" src="" />
                </div>
                <div className={appStyle.name}>
                  <label>Дмитрий</label>
                  <span>Автосервис</span>
                </div>
              </div>
              <div className={appStyle.reviewDescriptionText}>
                <p>
                  Ребята из Mercury Arts сделали для нас рекламу, которая
                  привлекла новых клиентов в наш автосервис. За короткое время
                  количество записей на обслуживание выросло, и мы довольны
                  результатом.
                </p>
              </div>
            </div>
            <div
              className={appStyle.card}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <div className={appStyle.reviewCardHeader}>
                <div className={appStyle.like}>
                  <img draggable="false" src={like} alt="like" />
                </div>
                <div className={appStyle.avatar}>
                  <img draggable="false" src="" />
                </div>
                <div className={appStyle.name}>
                  <label>Вадим</label>
                  <span>Приложение-планер</span>
                </div>
              </div>
              <div className={appStyle.reviewDescriptionText}>
                <p>
                  Большое спасибо, агентство отлично справилось с задачей.
                  Ребята всегда оперативно реагируют на запросы, и работать с
                  ними очень комфортно.
                </p>
              </div>
            </div>
            <div
              className={appStyle.card}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <div className={appStyle.reviewCardHeader}>
                <div className={appStyle.like}>
                  <img draggable="false" src={like} alt="like" />
                </div>
                <div className={appStyle.avatar}>
                  <img draggable="false" src="" />
                </div>
                <div className={appStyle.name}>
                  <label>Мария</label>
                  <span>Ресторан</span>
                </div>
              </div>
              <div className={appStyle.reviewDescriptionText}>
                <p>
                  Мы долго искали подрядчиков по соцсетям, и парни предложили
                  четкую стратегию, которая сработала! Теперь у нас стабильно
                  растет аудитория в профиле и полный зал по вечерам и выходным.
                  Рекомендуем!
                </p>
              </div>
            </div>
            <div
              className={appStyle.card}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <div className={appStyle.reviewCardHeader}>
                <div className={appStyle.like}>
                  <img draggable="false" src={like} alt="like" />
                </div>
                <div className={appStyle.avatar}>
                  <img draggable="false" src="" />
                </div>
                <div className={appStyle.name}>
                  <label>Игорь</label>
                  <span>Интернет-магазин одежды</span>
                </div>
              </div>
              <div className={appStyle.reviewDescriptionText}>
                <p>
                  Ребята из Mercury Arts помогли нам настроить конверсионные
                  кампании в Instagram и Facebook. Продажи выросли, планируем
                  расширять ассортимент товарок на рекламу. Отличная работа!
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
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
      </div>
    </section>
  );
};

export default Founders;
