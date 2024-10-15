import React, { useState, useEffect } from "react";

import appStyle from "../scss/app.module.scss";
import like from "../assets/img/like.webp";

const Reviews = ({ selectedLocale }) => {
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
      description: "Ребята из Mercury Arts помогли нам настроить конверсионные кампании в Instagram и Facebook. Продажи выросли, планируем расширять ассортимент товаров на рекламу. Отличная работа!",
    },
  ]);

  const [reviewsTitle, setReviewsTitle] = useState(''); // Заголовок отзывов

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
      setReviewsTitle(fetchedData.Reviews_title || 'Наши отзывы');

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
      setReviewsData((prevData) => prevData);
    }
  };

  useEffect(() => {
    fetchReviewsData();
  }, [selectedLocale]);

  // Разбиваем отзывы на два ряда
  const firstRowReviews = reviewsData.slice(0, 2);
  const secondRowReviews = reviewsData.slice(2, 4);

  return (
    <div className={appStyle.reviewsBlock}>
      <div className={appStyle.Row}>
        <label>{reviewsTitle || 'Наши отзывы'}</label>
      </div>

      <div className={appStyle.reviewsStatic}>
        <div className={appStyle.firstRow}>
          {firstRowReviews.map((review, index) => (
            <div key={index} className={appStyle.card}>
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
        <div className={appStyle.secondRow}>
          {secondRowReviews.map((review, index) => (
            <div key={index} className={appStyle.card}>
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
