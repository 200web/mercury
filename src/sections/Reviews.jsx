import React, { useState, useEffect } from "react";
import appStyle from "../scss/app.module.scss";
import like from "../assets/img/like.webp";

const ReviewCard = ({ name, position, description }) => {
  return (
    <div className={appStyle.card}>
      <div className={appStyle.reviewCardHeader}>
        <div className={appStyle.like}>
          <img draggable="false" src={like} alt="like" />
        </div>
        <div className={appStyle.name}>
          <label>{name}</label>
          <span>{position}</span>
        </div>
      </div>
      <div className={appStyle.reviewDescriptionText}>
        <p>{description}</p>
      </div>
    </div>
  );
};

const Reviews = ({ selectedLocale }) => {
  const [reviewsData, setReviewsData] = useState([
    {
      name: "Дмитрий",
      position: "Автосервис",
      description: "Ребята из Mercury Arts сделали для нас рекламу...",
    },
    {
      name: "Вадим",
      position: "Приложение-планер",
      description: "Большое спасибо, агентство отлично справилось...",
    },
    {
      name: "Мария",
      position: "Ресторан",
      description: "Мы долго искали подрядчиков по соцсетям...",
    },
    {
      name: "Игорь",
      position: "Интернет-магазин одежды",
      description: "Ребята из Mercury Arts помогли нам настроить...",
    },
  ]);

  const [reviewsTitle, setReviewsTitle] = useState("Наши отзывы");

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

      setReviewsTitle(fetchedData.Reviews_title || "Наши отзывы");

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
      setReviewsData((prevData) => prevData);
    }
  };

  useEffect(() => {
    fetchReviewsData();
  }, [selectedLocale]);

  // // Дублируем отзывы для создания бесконечного эффекта
  // const infiniteReviews = [...reviewsData, ...reviewsData, ...reviewsData, ...reviewsData];

  // // Создаем два отдельных ряда
  // const firstRowReviews = infiniteReviews.filter((_, index) => index === 0);
  // const secondRowReviews = infiniteReviews.filter((_, index) => index % 2 !== 0);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  const firstRowReviews = isMobile
    ? [...reviewsData, ...reviewsData] // На мобильной версии используем только один раз
    : [...reviewsData, ...reviewsData, ...reviewsData, ...reviewsData]; // На десктопе дублируем

  const secondRowReviews = [...reviewsData, ...reviewsData, ...reviewsData, ...reviewsData];

  return (
    <div className={appStyle.reviewsBlock}>
      <div className={appStyle.Row}>
        <label>{reviewsTitle || "Наши отзывы"}</label>
      </div>

      <div className={appStyle.reviewsStatic}>
        <div className={appStyle.firstRow}>
          {firstRowReviews.map((review, index) => (
            <ReviewCard
              key={index}
              name={review.name}
              position={review.position}
              description={review.description}
            />
          ))}
        </div>
        <div className={appStyle.secondRow}>
          {secondRowReviews.map((review, index) => (
            <ReviewCard
              key={index}
              name={review.name}
              position={review.position}
              description={review.description}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Reviews;
