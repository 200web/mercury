import React, { useEffect, useState, useRef } from "react";
import headerStyle from "../scss/components/header.module.scss";
import logo from "../assets/img/logo.webp";

const Header = ({ setIsModalVisible, setSelectedLocale }) => {
  const headerRef = useRef();
  const [isActive, setIsActive] = useState(0);
  const [menuVisible, setMenuVisible] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 840);
  const [isHeaderHidden, setIsHeaderHidden] = useState(false);
  const lastScrollY = useRef(0);

  const [isLocaleMenuOpen, setIsLocaleMenuOpen] = useState(false);
  const [menuData, setMenuData] = useState(null);

  const browserLocale = navigator.language.split("-")[0];
  const [selectedLocale, setSelectedLocaleState] = useState(browserLocale); // Установим начальное значение по умолчанию

  const defaultMenuData = {
    Services: "Услуги",
    Stages: "Этапы работы",
    Portfolio: "Портфолио",
    Contacts: "Контакты",
    Form: "Форма",
  };

  const handleMenuVisible = () => {
    setMenuVisible(!menuVisible);
  };

  const handleActiveButton = (id) => {
    setIsActive(id);
    if (isMobile) {
      setMenuVisible(!menuVisible);
    }
    const elementIds = ["Услуги", "Этапы", "Портфолио", "Контакты"];
    const element = document.getElementById(elementIds[id]);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleScroll = () => {
    setIsHeaderHidden(window.scrollY > lastScrollY.current);
    lastScrollY.current = window.scrollY;
  };

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 840);
    };

    window.addEventListener("resize", handleResize);
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    // Устанавливаем локаль на язык браузера при загрузке
    setSelectedLocaleState(browserLocale || "en");
  }, [browserLocale]);

  useEffect(() => {
    const fetchMenuData = async () => {
      try {
        const response = await fetch(
          `${process.env.REACT_APP_API_URL}api/menu?locale=${selectedLocale}`
        );
        const result = await response.json();
        setMenuData(result.data || defaultMenuData); // Если ответа нет, используем русские значения
      } catch (error) {
        console.error("Error fetching menu data:", error);
        setMenuData(defaultMenuData); // Если произошла ошибка, заполняем данными по умолчанию
      }
    };

    fetchMenuData();
  }, [selectedLocale]);

  const handleLocaleChange = (locale) => {
    setSelectedLocale(locale); // Обновление локали в родительском компоненте
    setSelectedLocaleState(locale); // Локальное обновление состояния локали
    localStorage.setItem("locale", locale); // Сохраняем выбранную локаль в localStorage
    setIsLocaleMenuOpen(false); // Закрываем меню после выбора
  };

  useEffect(() => {
    console.log(`Сохранённая локаль: ${localStorage.getItem("locale")}, Текущая локаль: ${selectedLocale}`);
  }, [selectedLocale]);

  const localeLabels = {
    pl: "PL",
    ru: "RU",
    en: "EN",
    uk: "UA" 
  };


  return (
    <header
      className={`${headerStyle.headerLayout} ${isHeaderHidden ? headerStyle.hidden : ""}`}
      ref={headerRef}
    >
      <div className={headerStyle.header}>
        <div className={headerStyle.leftContent}>
          <div className={headerStyle.title}>MERCURYARTS</div>

          <div className={headerStyle.logo}>
            <img src={logo} alt="Logo" />
          </div>
        </div>
        <div className={headerStyle.rightContent}>
          <div className={headerStyle.button} onClick={setIsModalVisible}>
            <button>
              {menuData ? menuData.Form : "Форма"}
            </button>
          </div>

          <div
            className={`${headerStyle.localeSelector} ${isLocaleMenuOpen ? headerStyle.open : ""}`}
            onMouseEnter={() => setIsLocaleMenuOpen(true)}
            onMouseLeave={() => setIsLocaleMenuOpen(false)}
          >
            <span>{localeLabels[selectedLocale].toUpperCase()}</span>
            <div className={headerStyle.localeMenu}>
              {["pl", "ru", "en", "uk"].map((locale) => (
                selectedLocale !== locale && (
                  <span key={locale} onClick={() => handleLocaleChange(locale)}>
                      {localeLabels[locale]}
                  </span>
                )
              ))}
            </div>
          </div>
        </div>

        <div
          className={`${headerStyle.menuButton} ${isMobile ? headerStyle.visible : ""} ${menuVisible ? headerStyle.active : ""}`}
          onClick={handleMenuVisible}
        >
          <span className={headerStyle.toggle}></span>
          <span className={headerStyle.toggle}></span>
          <span className={headerStyle.toggle}></span>
        </div>
      </div>

      {menuData ? (
        <nav
          className={`${headerStyle.nav} ${isMobile ? headerStyle.mobile : ""} ${menuVisible && isMobile ? headerStyle.active : ""}`}
        >
          <ul>
            <div
              className={headerStyle.underline}
              style={isMobile ? { top: `calc(${isActive * 25}% + 2rem)` } : { left: `${isActive * 25}%` }}
            ></div>
            {menuData.Services && (
              <li className={isActive === 0 ? headerStyle.active : ""} onClick={() => handleActiveButton(0)}>
                <a>{menuData.Services}</a>
              </li>
            )}
            {menuData.Stages && (
              <li className={isActive === 1 ? headerStyle.active : ""} onClick={() => handleActiveButton(1)}>
                <a>{menuData.Stages}</a>
              </li>
            )}
            {menuData.Portfolio && (
              <li className={isActive === 2 ? headerStyle.active : ""} onClick={() => handleActiveButton(2)}>
                <a>{menuData.Portfolio}</a>
              </li>
            )}
            {menuData.Contacts && (
              <li className={isActive === 3 ? headerStyle.active : ""} onClick={() => handleActiveButton(3)}>
                <a>{menuData.Contacts}</a>
              </li>
            )}

             <div className={headerStyle.localeMenuisOpen}>
                <span onClick={() => handleLocaleChange("pl")}>PL</span>
                <span onClick={() => handleLocaleChange("ru")}>RU</span>
                <span onClick={() => handleLocaleChange("en")}>EN</span>
                <span onClick={() => handleLocaleChange("uk")}>UA</span>
              </div>

          </ul>
        </nav>
      ) : (
        <div>Loading menu...</div>
      )}
    </header>
  );
};

export default Header;
