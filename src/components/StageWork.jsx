import React from "react";
import style from "../scss/components/stageOfWork.module.scss";
import flag from "../assets/img/Flag.webp";

const StageOfWork = ({ setIsModalVisible }) => {
  const myRef = React.useRef();
  const [isVisible, setIsVisible] = React.useState(false);
  const [startAnimation, setStartAnimation] = React.useState(false);
  const [sideIsVisible, setSideIsVisible] = React.useState(false);
  const [isMobile, setIsMobile] = React.useState(window.innerWidth <= 1050);
  const [roadmapItemVisible, setRoadmapItemVisible] = React.useState([
    false,
    false,
    false,
    false,
    false,
  ]);
  const [rowVisible, setRowVisible] = React.useState([
    false,
    false,
    false,
    false,
    false,
    false,
  ]);

  React.useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 1050);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

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

      if (!isMobile) {
        const rowVisibilityTimings = [0, 200, 400, 600, 800, 1000];
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
      } else {
        const rowVisibilityTimings = [0, 200, 400, 600, 800, 1000];
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
      }

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
          <label>Этапы работы</label>
        </div>
        {!isMobile && (
          <div
            className={`${style.scrollerEl} ${
              startAnimation ? style.active : ""
            }`}
          >
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
                <div
                  className={`${style.circle} ${
                    roadmapItemVisible[0] ? style.active : ""
                  }`}
                >
                  <img draggable="false" src={flag} alt="flag" />
                </div>
                <div
                  className={`${style.circle} ${
                    roadmapItemVisible[1] ? style.active : ""
                  }`}
                >
                  <img draggable="false" src={flag} alt="flag" />
                </div>
                <div
                  className={`${style.circle} ${
                    roadmapItemVisible[2] ? style.active : ""
                  }`}
                >
                  <img draggable="false" src={flag} alt="flag" />
                </div>
                <div
                  className={`${style.circle} ${
                    roadmapItemVisible[3] ? style.active : ""
                  }`}
                >
                  <img draggable="false" src={flag} alt="flag" />
                </div>
                <div
                  className={`${style.circle} ${
                    roadmapItemVisible[4] ? style.active : ""
                  }`}
                >
                  <img draggable="false" src={flag} alt="flag" />
                </div>
              </div>
              <span
                className={`${style.roadmapItem} ${
                  roadmapItemVisible[0] ? style.active : ""
                }`}
              >
                <label>1</label>
                <span>
                  Консультация и брифинг: выявление задач и постановка целей
                </span>
              </span>
              <div
                className={`${style.roadmapItem} ${
                  roadmapItemVisible[1] ? style.active : ""
                }`}
              >
                <label>2</label>
                <span>Формирование стратегии и планирование бюджета</span>
              </div>
              <div
                className={`${style.roadmapItem} ${
                  roadmapItemVisible[2] ? style.active : ""
                }`}
              >
                <label>3</label>
                <span>
                  Создание общих чатов и передача доступов к таблицам отчетности
                </span>
              </div>
              <div
                className={`${style.roadmapItem} ${
                  roadmapItemVisible[3] ? style.active : ""
                }`}
              >
                <label>4</label>
                <span>Подписание договора</span>
              </div>
              <div
                className={`${style.roadmapItem} ${
                  roadmapItemVisible[4] ? style.active : ""
                }`}
              >
                <label>5</label>
                <span>Начало работы</span>
              </div>
            </div>
          </div>
        )}
        <div
          className={`${
            !isMobile ? style.sideDescription : style.sideDescriptionMobile
          } ${sideIsVisible ? style.active : ""}`}
          ref={myRef}
        >
          <div className={style.rowList}>
            <div
              className={`${style.row} ${rowVisible[0] ? style.active : ""}`}
            >
              <label className={style.header}>1</label>
              <span className={style.description}>
                <span>
                  Консультация и брифинг: выявление задач и постановка целей
                </span>
              </span>
            </div>
            <div
              className={`${style.row} ${rowVisible[1] ? style.active : ""}`}
            >
              <label className={style.header}>2</label>
              <span className={style.description}>
                <span>Формирование стратегии и планирование бюджета</span>
              </span>
            </div>
            <div
              className={`${style.row} ${rowVisible[2] ? style.active : ""}`}
            >
              <label className={style.header}>3</label>
              <span className={style.description}>
                <span>
                  Создание общих чатов и передача доступов к таблицам отчетности
                </span>
              </span>
            </div>
            <div
              className={`${style.row} ${rowVisible[3] ? style.active : ""}`}
            >
              <label className={style.header}>4</label>
              <span className={style.description}>
                <span>Подписание договора</span>
              </span>
            </div>
            <div
              className={`${style.row} ${rowVisible[4] ? style.active : ""}`}
            >
              <label className={style.header}>5</label>
              <span className={style.description}>
                <span>Начало работы</span>
              </span>
            </div>
          </div>
          <div
            className={`${style.buttonLayout} ${
              rowVisible[5] ? style.active : ""
            }`}
          >
            <div className={style.button} onClick={setIsModalVisible}>
              <span>Консультация</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StageOfWork;
