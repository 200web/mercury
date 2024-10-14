import React, { useRef, useEffect, useState } from "react";

import appStyle from "../scss/app.module.scss";
import like from "../assets/img/like.webp";

const Reviews = ({ selectedLocale }) => {
  const [currentIndex, setCurrentIndex] = React.useState(0);
  const [isAnimating, setIsAnimating] = React.useState(false);
  const [isPaused, setIsPaused] = React.useState(false);
  const firstRowRef = useRef(null);
  const secondRowRef = useRef(null);

  const [reviewsData, setReviewsData] = useState([
    {
      name: "Дмитрий",
      position: "Автосервис",
      description: "Ребята из Mercury Arts сделали для нас рекламу, которая привлекла новых клиентов в наш автосервис. За короткое время количество записей на обслуживание выросло, и мы довольны результатом.",
    },
    {
      name: "Вадим",
      position: "Приложение-планер",
      description: "Большое спасибо, агентство отлично справилось с задачей. Ребята всегда оперативно реагируют на запросы, и работать с ними очень комфортно.",
    },
    {
      name: "Мария",
      position: "Ресторан",
      description: "Мы долго искали подрядчиков по соцсетям, и парни предложили четкую стратегию, которая сработала! Теперь у нас стабильно растет аудитория в профиле и полный зал по вечерам и выходным. Рекомендуем!",
    },
    {
      name: "Игорь",
      position: "Интернет-магазин одежды",
      description: "Ребята из Mercury Arts помогли нам настроить конверсионные кампании в Instagram и Facebook. Продажи выросли, планируем расширять ассортимент товарок на рекламу. Отличная работа!",
    },
  ]);

  const [reviewsTitle, setReviewsTitle] = useState(''); // Добавляем состояние для заголовка

  const fetchReviewsData = async () => {
    try {
      const response = await fetch(
        `${process.env.REACT_APP_API_URL}api/review?locale=${selectedLocale}`
      );

      if (!response.ok) {
        throw new Error("Ошибка получения данных");
      }

      const result = await response.json();
      const fetchedData = result.data;

      // Устанавливаем заголовок отзывов
      setReviewsTitle(fetchedData.Reviews_title || 'Наши отзывы'); // Используем условие для установки заголовка

      // Обновляем данные отзывов с учетом данных из API
      const updatedReviewsData = [
        {
          name: fetchedData.Reviews_dmitrii,
          position: fetchedData.Reviews_dmitrii_autoservice,
          description: fetchedData.Reviews_dmitrii_description,
        },
        {
          name: fetchedData.Reviews_vadim,
          position: fetchedData.Reviews_vadim_application,
          description: fetchedData.Reviews_vadim_description,
        },
        {
          name: fetchedData.Reviews_maria,
          position: fetchedData.Reviews_maria_restaurant,
          description: fetchedData.Reviews_maria_restaurant_description,
        },
        {
          name: fetchedData.Reviews_igor,
          position: fetchedData.Reviews_igor_online_shop,
          description: fetchedData.Reviews_igor_description,
        },
      ];

      setReviewsData(updatedReviewsData);
    } catch (error) {
      console.error("Ошибка запроса данных:", error);
      // В случае ошибки оставляем русские варианты
      setReviewsData((prevData) => prevData);
    }
  };

  useEffect(() => {
    fetchReviewsData();
  }, [selectedLocale]);

  // Дублируем отзывы для бесконечного прокрута
  const duplicatedReviewsData = [...reviewsData, ...reviewsData];

  useEffect(() => {
    let interval;

    if (!isPaused) {
      interval = setInterval(() => {
        setIsAnimating(true);
        setCurrentIndex((prevIndex) => {
          const nextIndex = (prevIndex + 1) % duplicatedReviewsData.length;
          setTimeout(() => {
            setIsAnimating(false);
          }, 3);
          return nextIndex;
        });
      }, 3); // Установите желаемый интервал между сменой отзывов
    }

    return () => clearInterval(interval);
  }, [isPaused, duplicatedReviewsData.length]);

  const handleMouseEnter = () => {
    setIsPaused(true);
  };

  const handleMouseLeave = () => {
    setIsPaused(false);
  };

  const currentReview = duplicatedReviewsData[currentIndex];

  return (
    <div className={appStyle.rewievsBlock}>
      <div className={appStyle.Row}>
        <label>{reviewsTitle || 'Наши отзывы'}</label>
      </div>

      
      <div className={appStyle.rewievsCarousel}>
        <div className={appStyle.firstVertRow} ref={firstRowRef}>
          {duplicatedReviewsData.map((review, index) => (
            <div
              key={index}
              className={appStyle.card}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <div className={appStyle.reviewCardHeader}>
                <div className={appStyle.like}>
                  <img draggable="false" src={like} alt="like" />
                </div>
                <div className={appStyle.name}>
                  <label>{review.name}</label>
                  <span>{review.position}</span>
                </div>
              </div>
              <div className={appStyle.reviewDescriptionText}>
                <p>{review.description}</p>
              </div>
            </div>
          ))}
        </div>
        <div className={appStyle.secondVertRow} ref={secondRowRef}>
          {duplicatedReviewsData.map((review, index) => (
            <div
              key={index}
              className={appStyle.card}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <div className={appStyle.reviewCardHeader}>
                <div className={appStyle.like}>
                  <img draggable="false" src={like} alt="like" />
                </div>
                <div className={appStyle.name}>
                  <label>{review.name}</label>
                  <span>{review.position}</span>
                </div>
              </div>
              <div className={appStyle.reviewDescriptionText}>
                <p>{review.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Reviews;
