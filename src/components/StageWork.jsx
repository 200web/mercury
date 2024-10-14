import React from "react";
import style from "../scss/components/stageOfWork.module.scss";
import flag from "../assets/img/Flag.webp";

const StageOfWork = ({ setIsModalVisible, selectedLocale }) => {
  const myRef = React.useRef();
  const [isVisible, setIsVisible] = React.useState(false);
  const [startAnimation, setStartAnimation] = React.useState(false);
  const [sideIsVisible, setSideIsVisible] = React.useState(false);

  const isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);
  const [isMobile, setIsMobile] = React.useState(
    window.innerWidth <= 1050 || isSafari
  );

  // State for menu data
  const [menuData, setMenuData] = React.useState({
    Stages: "Этапы работы",
  });
  
  // Изменяем размер массива на 5
  const [roadmapItemVisible, setRoadmapItemVisible] = React.useState([false, false, false, false, false]);
  const [rowVisible, setRowVisible] = React.useState([false, false, false, false, false]);

  // State for work stage data with default values
  const [workStageData, setWorkStageData] = React.useState({
    work_stage_1: "Консультация и брифинг: выявление задач и постановка целей",
    work_stage_2: "Формирование стратегии и планирование бюджета",
    work_stage_3: "Создание общих чатов и передача доступов к таблицам отчетности",
    work_stage_4: "Подписание договора",
    work_stage_5: "Начало работы",
    work_stage_button: "Консультация",
  });

  // Fetch work stages data from API
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
            Stages: fetchedData.Stages || prevData.Stages,
          }));
        } else {
          console.error("Ошибка получения данных с сервера");
        }
      } catch (error) {
        console.error("Ошибка запроса данных:", error);
      }
    };

   
   
    const fetchWorkStages = async () => {
      try {
        const response = await fetch(
          `${process.env.REACT_APP_API_URL}api/work-stage?locale=${selectedLocale}`
        );
        if (response.ok) {
          const result = await response.json();
          const fetchedData = result.data;

          setWorkStageData((prevData) => ({
            ...prevData,
            work_stage_1: fetchedData.work_stage_1 || prevData.work_stage_1,
            work_stage_2: fetchedData.work_stage_2 || prevData.work_stage_2,
            work_stage_3: fetchedData.work_stage_3 || prevData.work_stage_3,
            work_stage_4: fetchedData.work_stage_4 || prevData.work_stage_4,
            work_stage_5: fetchedData.work_stage_5 || prevData.work_stage_5,
            work_stage_button: fetchedData.work_stage_button || prevData.work_stage_button,
          }));
        } else {
          console.error("Ошибка получения данных с сервера");
        }
      } catch (error) {
        console.error("Ошибка запроса данных:", error);
      }
    };
    fetchMenuData();
    fetchWorkStages();
  }, [selectedLocale]); // Добавляем зависимость от selectedLocale

  React.useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 1050 || isSafari);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [isSafari]);

  React.useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.4 }
    );
    observer.observe(myRef.current);
  }, []);

  React.useEffect(() => {
    if (isVisible) {
      const animationDuration = isMobile ? 200 : 12000;

      const timeoutIds = [
        setTimeout(() => setStartAnimation(true), 4000),
        setTimeout(() => setSideIsVisible(true), animationDuration),
      ];

      const rowVisibilityTimings = [0, 200, 400, 600, 800];
      rowVisibilityTimings.forEach((time, index) =>
        timeoutIds.push(
          setTimeout(() => {
            setRowVisible((prev) => {
              const newRowVisible = [...prev];
              newRowVisible[index] = true;
              return newRowVisible;
            });
          }, animationDuration + time)
        )
      );

      const roadmapVisibilityTimings = [1300, 3100, 5100, 7200, 9300];
      roadmapVisibilityTimings.forEach((time, index) =>
        timeoutIds.push(
          setTimeout(() => {
            setRoadmapItemVisible((prev) => {
              const newRowVisible = [...prev];
              newRowVisible[index] = true;
              return newRowVisible;
            });
          }, time)
        )
      );

      return () => timeoutIds.forEach(clearTimeout);
    }
  }, [isVisible, isMobile]);

  return (
    <div className={style.stageWorkBlock} id="Этапы">
      <div className={`${!isMobile ? style.Row : style.RowMobile}`}>
        <div className={style.HText}>
          <label>{menuData.Stages}</label>
        </div>
        {!isMobile && (
          <div className={`${style.scrollerEl} ${startAnimation ? style.active : ""}`}>
            <div className={style.roadmap}>
              <div>
                <svg
                  width="3370px"
                  height="671px"
                  viewBox="0 0 3370 671"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  xlink="http://www.w3.org/1999/xlink"
                  className={style.svg}
                >
                  <path
                    ref={myRef}
                    d="M0 150 Q 500 450, 800 120 T 1400 150 T 2000 150 T 2800 100 T 3900 100"
                    className={isVisible ? style.active : ""}
                    style={{
                      strokeDasharray: "3800px",
                      strokeDashoffset: "3800px",
                    }}
                  />
                </svg>
                {roadmapItemVisible.map((visible, index) => (
                  <div key={index} className={`${style.circle} ${visible ? style.active : ""}`}>
                    <img draggable="false" src={flag} alt="flag" />
                  </div>
                ))}
              </div>
              {roadmapItemVisible.map((visible, index) => (
                <span key={index} className={`${style.roadmapItem} ${visible ? style.active : ""}`}>
                  <label>{index + 1}</label>
                  <span>{workStageData[`work_stage_${index + 1}`]}</span>
                </span>
              ))}
            </div>
          </div>
        )}
        <div className={`${!isMobile ? style.sideDescription : style.sideDescriptionMobile} ${sideIsVisible ? style.active : ""}`} ref={myRef}>
          <div className={style.rowList}>
            {rowVisible.map((visible, index) => (
              <div key={index} className={`${style.row} ${visible ? style.active : ""}`}>
                <label className={style.header}>{index + 1}</label>
                <span className={style.description}>
                  <span>{workStageData[`work_stage_${index + 1}`]}</span>
                </span>
              </div>
            ))}
          </div>
          <div className={`${style.buttonLayout} ${sideIsVisible ? style.active : ""}`}>
            <div className={style.button} onClick={setIsModalVisible}>
              <span>{workStageData.work_stage_button}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StageOfWork;
