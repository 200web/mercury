import React from "react";
import appStyle from "../scss/app.module.scss";
import arrow from "../assets/img/Arrow.png";
import radio from "../assets/img/radio.webp";
import car from "../assets/img/car.webp";
import desk from "../assets/img/desk.webp";
import comp from "../assets/img/comp.webp";
import { useDispatch, useSelector } from "react-redux";
import { fetchCards } from "../Redux/cardSlice";

const StageOfWorkSection = ({ selectedLocale }) => {
  const [activeCard, setIsActiveCard] = React.useState(0);
  const [isClicked, setIsClicked] = React.useState(false);
  const [isMobile, setIsMobile] = React.useState(window.innerWidth <= 960);
  const { cards } = useSelector((state) => state.cards);
  const dispatch = useDispatch();


  const [caseData, setCaseData] = React.useState({
    Case1: {
      title: "Кейсы",
      description: "Описание",
      geography: "География",
      goals: "Цели",
      spent: "Потрачено",
      projectTitle: "Реклама концертов “Гио Пики” и “Метели”",
      projectDescription: "Реклама концертов различных исполнителей в Европе",
      projectGeography: "Польша, Чехия, Германия",
      projectGoals: "Продажи билетов на концерт, повышение узнаваемости",
      projectSpent: "Потрачено",
      case_average_cost: "Средняя цена заявки",
      case_best_cost: "Лучшая цена заявки",
      case_leads_received: "Получено заявок",

    },
    Case2: {
      title: "Автосервис Real Auto",
      description: "Автосервис с такими услугами как: покраска, удаление вмятин",
      geography: "Польша",
      goals: "Новые клиенты на услуги",
    },
    Case3: {
      title: "Ударостойкие столешницы Getalit",
      description: "Удароустойчивые, водонепроницаемые, с огромным кол-вом стилей столешницы HPL",
      geography: "Польша, Беларусь",
      new_subscriptions: "Новых подписок",
      goals: "Продажа столешниц +  наращивание узнаваемости  на польском и беларуском  рынках",
    },
    Case4: {
      title: "Приложение-планнер The Path",
      description: "Приложение-планер для интеграции полезных привычек в жизнь",
      geography: "США, Канада, Великобритания, Австралия, Новая Зеландия",
      goals: "Новые скачивания приложения через рекламу в Meta, оплаты подписки",
      num_of_download: "Количество скачиваний",
      best_cost_download: "Лучшая стоимость одного скачивания",
      best_cost_avarage_month_cost_download: "Среднемесячная стоимость  одного скачивания",
    },
  });





  const [caseNumbersData, setCaseNumbersData] = React.useState({
    Case1: {

      Card1_image: {radio},
    },
    Case2: {
      Card2_banner_1: "493$",
      Card2_banner_2: "4.9$",
      Card2_banner_3: "3.5$",
      Card2_banner_4: "101",
      
      Card2_image: {car},
    },
    Case3: {
      Card3_banner_1: "2440$",
      Card3_banner_2: "5.2$",
      Card3_banner_3: "4.1$",
      Card3_banner_4: "384",
      Card3_banner_5: "512",

      Card3_image: {desk},
    },
    Case4: {
      Card4_banner_1: "1004$",
      Card4_banner_2: "93",
      Card4_banner_3: "4.5$",
      Card4_banner_4: "11",

      Card4_image: {comp},
    },
  });




  React.useEffect(() => {
    const fetchCaseData = async () => {
      try {
        const response = await fetch(
          `${process.env.REACT_APP_API_URL}api/case?locale=${selectedLocale}`
        );
        if (response.ok) {

          const result = await response.json();
          const fetchedData = result.data;

          setCaseData({
            Case1: {
              title: fetchedData.Case_title || caseData.Case1.title,
              description: fetchedData.Case_description || caseData.Case1.description,
              geography: fetchedData.Case_geography || caseData.Case1.geography,
              goals: fetchedData.Case_goals || caseData.Case1.goals,
              spent: fetchedData.Case_spent || caseData.Case1.spent,
              projectTitle: fetchedData.Case_gio_pika_title || caseData.Case1.projectTitle,
              projectDescription: fetchedData.Case_gio_pika_description || caseData.Case1.projectDescription,
              projectGeography: fetchedData.Case_gio_pika_geography || caseData.Case1.projectGeography,
              projectGoals: fetchedData.Case_gio_pika_goals || caseData.Case1.projectGoals,
              projectSpent: fetchedData.Case_gio_pika_spent || caseData.Case1.projectSpent,
              case_average_cost: fetchedData.Case_average_cost || caseData.Case1.case_average_cost,
              case_best_cost: fetchedData.Case_best_cost || caseData.Case1.case_best_cost,
              case_leads_received: fetchedData.Case_leads_received || caseData.Case1.case_leads_receivedt,
            },
            Case2: {
              title: fetchedData.Case_real_auto_title || caseData.Case2.title,
              description: fetchedData.Case_real_auto_description || caseData.Case2.description,
              geography: fetchedData.Case_real_auto_geography || caseData.Case2.geography,
              goals: fetchedData.Case_real_auto_goals || caseData.Case2.goals,

            },
            Case3: {
              title: fetchedData.Case_getalit || caseData.Case3.title,
              description: fetchedData.Case_getalit_description || caseData.Case3.description,
              geography: fetchedData.Case_getalit_geography || caseData.Case3.geography,
              new_subscriptions: fetchedData.Case_getalit_new_subscriptions || caseData.Case3.new_subscriptions,
              goals: fetchedData.Case_getalit_goals || caseData.Case3.goals,
            },
            Case4: {
              title: fetchedData.Case_thepath || caseData.Case4.title,
              description: fetchedData.Case_thepath_description || caseData.Case4.description,
              geography: fetchedData.Case_thepath_geography || caseData.Case4.geography,
              goals: fetchedData.Case_thepath_goals || caseData.Case4.goals,
              num_of_download: fetchedData.Case_thepath_num_of_download || caseData.Case4.num_of_download,
              best_cost_download: fetchedData.Case_thepath_best_cost_download || caseData.Case4.best_cost_download,
              best_cost_avarage_month_cost_download: fetchedData.Case_thepath_best_cost_avarage_month_cost_download || caseData.Case4.best_cost_avarage_month_cost_download,

            },

          });
          console.log(caseData);
        } else {
          console.error("Ошибка получения данных с сервера");
        }
      } catch (error) {
        console.error("Ошибка запроса данных:", error);
      }
    };

    fetchCaseData();
  }, [selectedLocale]);



  React.useEffect(() => {
    const fetchCaseNumbersData = async () => {
      try {
        const response = await fetch(
          `${process.env.REACT_APP_API_URL}api/case?populate=*`
        );
        if (response.ok) {

          const result = await response.json();
          const fetchedData = result.data;
          const apiUrl = process.env.REACT_APP_API_URL;
          const trimmedApiUrl = apiUrl.endsWith('/') ? apiUrl.slice(0, -1) : apiUrl;

          console.log("Fetched data:", fetchedData);

          setCaseNumbersData({
            Case1: {
               Card1_image: fetchedData.Card1_image[0]?.url
              ? `${trimmedApiUrl}${fetchedData.Card1_image[0].url}` // Объединяем базовый адрес с частью URL изображения
              : caseNumbersData.Case1.Card1_image,
               },
            Case2: {
              Card2_banner_1: fetchedData.Card2_banner_1 || caseNumbersData.Case2.Card2_banner_1,
              Card2_banner_2: fetchedData.Card2_banner_2 || caseNumbersData.Case2.Card2_banner_2,
              Card2_banner_3: fetchedData.Card2_banner_3 || caseNumbersData.Case2.Card2_banner_3,
              Card2_banner_4: fetchedData.Card2_banner_4 || caseNumbersData.Case2.Card2_banner_4,
            
              Card2_image: fetchedData.Card2_image[0]?.url
              ? `${trimmedApiUrl}${fetchedData.Card2_image[0].url}` 
              : caseNumbersData.Case2.Card2_image,
               },
            Case3: {
              Card3_banner_1: fetchedData.Card3_banner_1 || caseNumbersData.Case3.Card3_banner_1,
              Card3_banner_2: fetchedData.Card3_banner_2 || caseNumbersData.Case3.Card3_banner_2,
              Card3_banner_3: fetchedData.Card3_banner_3 || caseNumbersData.Case3.Card3_banner_3,
              Card3_banner_4: fetchedData.Card3_banner_4 || caseNumbersData.Case3.Card3_banner_4,
              Card3_banner_5: fetchedData.Card3_banner_5 || caseNumbersData.Case3.Card3_banner_5,
           
              Card3_image: fetchedData.Card3_image[0]?.url
              ? `${trimmedApiUrl}${fetchedData.Card3_image[0].url}` 
              : caseNumbersData.Case3.Card3_image,
            },
            Case4: {
              Card4_banner_1: fetchedData.Card4_banner_1 || caseNumbersData.Case4.Card4_banner_1,
              Card4_banner_2: fetchedData.Card4_banner_2 || caseNumbersData.Case4.Card4_banner_2,
              Card4_banner_3: fetchedData.Card4_banner_3 || caseNumbersData.Case4.Card4_banner_3,
              Card4_banner_4: fetchedData.Card4_banner_4 || caseNumbersData.Case4.Card4_banner_4,
             
              Card4_image: fetchedData.Card4_image[0]?.url
              ? `${trimmedApiUrl}${fetchedData.Card4_image[0].url}` 
              : caseNumbersData.Case4.Card4_image,
           
            },
          });
          console.log(caseNumbersData);
          console.log("API URL:", process.env.REACT_APP_API_URL);

        } else {
          console.error("Ошибка получения данных с сервера");
        }
      } catch (error) {
        console.error("Ошибка запроса данных:", error);
      }
    };

    fetchCaseNumbersData();
  }, [selectedLocale]);





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
          <label>
            {caseData?.Case1?.title || "Кейсы"}
          </label>
        </div>



        <div className={appStyle.caseCards}>

          <div
            className={`${appStyle.upperLeftCard} ${activeCard === 1
              ? appStyle.active
              : isClicked
                ? appStyle.hidden
                : ""
              }`}
            onClick={() => handleClick(1)}
          >


            <header className={appStyle.header}>
              <label>{caseData.Case1.projectTitle}</label>     {/* title */}
            </header>
            <div className={appStyle.lower}>
              <span>01</span>
            </div>
            <div className={appStyle.contentBox}>
              <div className={appStyle.leftSide}>
                <div className={appStyle.image}>
                  <img draggable="false" src={caseNumbersData.Case1.Card1_image} alt="radio" />   {/* image */}
                </div>
              </div>
              <div className={appStyle.rightSide}>
                <div
                  className={`${appStyle.rowList} ${activeCard === 1
                    ? appStyle.active
                    : isClicked
                      ? appStyle.hidden
                      : ""
                    }`}
                >
                  <div className={appStyle.row}>
                    <label className={appStyle.header}>
                      {caseData.Case1.description}     {/* description */}
                    </label>
                    <span className={appStyle.description}>
                      {caseData.Case1.projectDescription}     {/* project description */}
                    </span>
                  </div>
                  <div className={appStyle.row}>
                    <label className={appStyle.header}>
                      {caseData.Case1.geography}     {/* geography */}
                    </label>
                    <span className={appStyle.description}>
                      {caseData.Case1.projectGeography}     {/* project geography */}
                    </span>
                  </div>
                  <div className={appStyle.row}>
                    <label className={appStyle.header}>
                      {caseData.Case1.goals}     {/* goals */}
                    </label>
                    <span className={appStyle.description}>
                      {caseData.Case1.projectGoals}     {/*project goals */}
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
            className={`${appStyle.downLeftCard} ${activeCard === 3
              ? appStyle.active
              : isClicked
                ? appStyle.hidden
                : ""
              }`}
            onClick={() => handleClick(3)}
          >



            <header className={appStyle.header}>
              <label>
                {caseData.Case3.title}     {/*title */}
              </label>
            </header>
            <div className={appStyle.lower}>
              <span>03</span>
            </div>
            <div className={appStyle.contentBox}>
              <div className={appStyle.leftSide}>
                <div className={appStyle.image}>
                  <img draggable="false" src={caseNumbersData.Case3.Card3_image} alt="radio" />  {/* image */}
                </div>
              </div>
              <div className={appStyle.rightSide}>
                <div
                  className={`${appStyle.rowList} ${activeCard === 3
                    ? appStyle.active
                    : isClicked
                      ? appStyle.hidden
                      : ""
                    }`}
                >
                  <div className={appStyle.row}>
                    <label className={appStyle.header}>
                      {caseData.Case1.description}     {/* description */}
                    </label>
                    <span className={appStyle.description}>
                      {caseData.Case3.description}     {/* project description */}
                    </span>
                  </div>
                  <div className={appStyle.row}>
                    <label className={appStyle.header}>
                      {caseData.Case1.geography}     {/* geography */}
                    </label>
                    <span className={appStyle.description}>
                      {caseData.Case3.geography}     {/* geography */}
                    </span>
                  </div>
                  <div className={appStyle.row}>
                    <label className={appStyle.header}>
                      {caseData.Case1.goals}     {/* goals */}
                    </label>
                    <span className={appStyle.description}>
                      {caseData.Case3.goals}     {/* goals */}
                    </span>
                  </div>
                </div>

                <div className={appStyle.cards}>
                  <div className={appStyle.card}>
                    <div className={appStyle.HText}>
                      <span>
                        {caseData.Case1.spent}     {/* spent */}
                      </span>
                    </div>
                    <div className={appStyle.value}>
                      <span>
                        {caseNumbersData.Case3.Card3_banner_1}
                        {/* card banner */}
                      </span>
                    </div>
                  </div>
                  <div className={appStyle.card}>
                    <div className={appStyle.HText}>
                      <span>
                        {caseData.Case1.case_average_cost}     {/* case_average_cost */}
                      </span>
                    </div>
                    <div className={appStyle.value}>
                      <span>
                        {caseNumbersData.Case3.Card3_banner_2}       {/* card banner */}
                      </span>
                    </div>
                  </div>
                  <div className={appStyle.card}>
                    <div className={appStyle.HText}>
                      {caseData.Case1.case_best_cost}     {/* case_best_cost */}
                    </div>
                    <div className={appStyle.value}>
                      <span>
                        {caseNumbersData.Case3.Card3_banner_3}       {/* card banner */}
                      </span>
                    </div>
                  </div>
                  <div className={appStyle.card}>
                    <div className={appStyle.HText}>
                      {caseData.Case1.case_leads_received}     {/* case_leads_received */}
                    </div>
                    <div className={appStyle.value}>
                      <span>
                        {caseNumbersData.Case3.Card3_banner_4}       {/* card banner */}
                      </span>
                    </div>
                  </div>
                  <div className={appStyle.card}>
                    <div className={appStyle.HText}>
                      {caseData.Case3.new_subscriptions}     {/* new_subscriptions */}
                    </div>
                    <div className={appStyle.value}>
                      <span>
                        {caseNumbersData.Case3.Card3_banner_5}       {/* card banner */}
                      </span>
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
            className={`${appStyle.upperRightCard} ${activeCard === 2
              ? appStyle.active
              : isClicked
                ? appStyle.hidden
                : ""
              }`}
            onClick={() => handleClick(2)}
          >






            <header className={appStyle.header}>
              <label>
                {caseData.Case2.title}     {/* title */}
              </label>
            </header>
            <div className={appStyle.lower}>
              <span>02</span>
            </div>
            <div className={appStyle.contentBox}>
              <div className={appStyle.leftSide}>
                <div className={appStyle.image}>
                  <img draggable="false" src={caseNumbersData.Case2.Card2_image} alt="desk" />
                </div>
              </div>
              <div className={appStyle.rightSide}>
                <div
                  className={`${appStyle.rowList} ${activeCard === 2
                    ? appStyle.active
                    : isClicked
                      ? appStyle.hidden
                      : ""
                    }`}
                >
                  <div className={appStyle.row}>
                    <label className={appStyle.header}>
                      {caseData.Case1.description}     {/* description */}
                    </label>
                    <span className={appStyle.description}>
                      {caseData.Case2.description}     {/* project description */}
                    </span>
                  </div>
                  <div className={appStyle.row}>
                    <label className={appStyle.header}>
                      {caseData.Case1.geography}     {/* geography */}
                    </label>
                    <span className={appStyle.description}>
                      {caseData.Case2.geography}     {/* geography */}
                    </span>
                  </div>
                  <div className={appStyle.row}>
                    <label className={appStyle.header}>
                      {caseData.Case1.goals}     {/* goals */}
                    </label>
                    <span className={appStyle.description}>
                      {caseData.Case2.goals}     {/* goals */}
                    </span>
                  </div>
                </div>

                <div className={appStyle.cards}>
                  <div className={appStyle.card}>
                    <div className={appStyle.HText}>
                      <span>
                        {caseData.Case1.spent}     {/* spent */}
                      </span>
                    </div>
                    <div className={appStyle.value}>
                      <span>
                        {caseNumbersData.Case2.Card2_banner_1}       {/* card banner */}
                      </span>

                    </div>
                  </div>
                  <div className={appStyle.card}>
                    <div className={appStyle.HText}>
                      <span>
                        {caseData.Case1.case_average_cost}     {/* case_average_cost */}
                      </span>
                    </div>
                    <div className={appStyle.value}>
                      <span>
                        {caseNumbersData.Case2.Card2_banner_2}       {/* card banner */}
                      </span>
                    </div>
                  </div>
                  <div className={appStyle.card}>
                    <div className={appStyle.HText}>
                      {caseData.Case1.case_best_cost}     {/* case_best_cost */}
                    </div>
                    <div className={appStyle.value}>
                      <span>
                        {caseNumbersData.Case2.Card2_banner_3}       {/* card banner */}
                      </span>
                    </div>
                  </div>
                  <div className={appStyle.card}>
                    <div className={appStyle.HText}>
                      {caseData.Case1.case_leads_received}     {/* case_leads_received */}
                    </div>
                    <div className={appStyle.value}>
                      <span>
                        {caseNumbersData.Case2.Card2_banner_4}       {/* card banner */}
                      </span>
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
            className={`${appStyle.downRightCard} ${activeCard === 4
              ? appStyle.active
              : isClicked
                ? appStyle.hidden
                : ""
              }`}
            onClick={() => handleClick(4)}
          >



            <header className={appStyle.header}>
              <label>
                {caseData.Case4.title}  {/* title */}
              </label>
            </header>
            <div className={appStyle.lower}>
              <span>04</span>
            </div>
            <div className={appStyle.contentBox}>
              <div className={appStyle.leftSide}>
                <div className={appStyle.image}>
                  <img draggable="false" src={caseNumbersData.Case4.Card4_image} alt="desk" /> {/* image */}
                </div>
              </div>
              <div className={appStyle.rightSide}>
                <div
                  className={`${appStyle.rowList} ${activeCard === 4
                    ? appStyle.active
                    : isClicked
                      ? appStyle.hidden
                      : ""
                    }`}
                >
                  <div className={appStyle.row}>
                    <label className={appStyle.header}>
                      {caseData.Case1.description}     {/* description */}
                    </label>
                    <span className={appStyle.description}>
                      {caseData.Case4.description}     {/* project description */}
                    </span>
                  </div>
                  <div className={appStyle.row}>
                    <label className={appStyle.header}>
                      {caseData.Case1.geography}     {/* geography */}
                    </label>
                    <span className={appStyle.description}>
                      {caseData.Case4.geography}     {/* geography */}
                    </span>
                  </div>
                  <div className={appStyle.row}>
                    <label className={appStyle.header}>
                      {caseData.Case1.goals}     {/* goals */}
                    </label>
                    <span className={appStyle.description}>
                      {caseData.Case4.goals}     {/* goals */}
                    </span>
                  </div>
                </div>

                <div className={appStyle.cards}>
                  <div className={appStyle.card}>
                    <div className={appStyle.HText}>
                      <span>
                        {caseData.Case1.spent}     {/* spent */}
                      </span>
                    </div>
                    <div className={appStyle.value}>
                      <span>
                        {caseNumbersData.Case4.Card4_banner_1}       {/* card banner */}
                      </span>
                    </div>
                  </div>
                  <div className={appStyle.card}>
                    <div className={appStyle.HText}>
                      <span>
                        {caseData.Case4.num_of_download}     {/* num_of_download */}
                      </span>
                    </div>
                    <div className={appStyle.value}>
                      <span>
                        {caseNumbersData.Case4.Card4_banner_2}       {/* card banner */}
                      </span>
                    </div>
                  </div>
                  <div className={appStyle.card}>
                    <div className={appStyle.HText}>
                      {caseData.Case4.best_cost_download}     {/* best_cost_download */}
                    </div>
                    <div className={appStyle.value}>
                      <span>
                        {caseNumbersData.Case4.Card4_banner_3}       {/* card banner */}
                      </span>
                    </div>
                  </div>
                  <div className={appStyle.card}>
                    <div className={appStyle.HText}>
                      <span>
                        {caseData.Case4.best_cost_avarage_month_cost_download}     {/* best_cost_avarage_month_cost_download */}

                      </span>
                    </div>
                    <div className={appStyle.value}>
                      <span>
                        {caseNumbersData.Case4.Card4_banner_4}       {/* card banner */}
                      </span>
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
