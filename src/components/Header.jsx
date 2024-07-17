import React, { useEffect, useState } from "react";
import headerStyle from "../scss/components/header.module.scss";
import logo from "../assets/img/logo.webp";

const Header = ({ setIsModalVisible }) => {
  const headerRef = React.useRef();
  const [isActive, setIsActive] = React.useState(0);
  const [isVisible, setIsVisible] = React.useState(true);
  const [menuVisible, setMenuVisible] = React.useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 840);

  const handleMenuVisible = () => {
    setMenuVisible(!menuVisible);
  };

  const handleActiveButton = (id) => {
    setIsActive(id);
    if (isMobile) {
      setMenuVisible(!menuVisible);
    }
    switch (id) {
      case 0: {
        const element = document.getElementById("Услуги");
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
        break;
      }

      case 1: {
        const element = document.getElementById("Этапы");
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
        break;
      }

      case 2: {
        const element = document.getElementById("Портфолио");
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
        break;
      }

      case 3: {
        const element = document.getElementById("Контакты");
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
        break;
      }
    }
  };

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 840);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <header className={headerStyle.headerLayout} ref={headerRef}>
      <div className={headerStyle.header}>
        <div className={headerStyle.title}>MERCURYARTS</div>
        <div className={headerStyle.logo}>
          <img src={logo} alt="Logo" />
        </div>
        <div className={headerStyle.button} onClick={setIsModalVisible}>
          <button>Форма</button>
        </div>
        <div
          className={`${headerStyle.menuButton} ${
            isMobile ? headerStyle.visible : ""
          } ${menuVisible ? headerStyle.active : ""}`}
          onClick={handleMenuVisible}
        >
          <span className={headerStyle.toggle}></span>
          <span className={headerStyle.toggle}></span>
          <span className={headerStyle.toggle}></span>
        </div>
      </div>
      <nav
        className={`${headerStyle.nav} ${isMobile ? headerStyle.mobile : ""} ${
          menuVisible && isMobile ? headerStyle.active : ""
        }`}
      >
        <ul>
          <div
            className={headerStyle.underline}
            style={
              isMobile
                ? { top: `calc(${isActive * 25}% + 2rem)` }
                : { left: `${isActive * 25}%` }
            }
          ></div>
          <li
            className={isActive === 0 ? headerStyle.active : ""}
            onClick={() => handleActiveButton(0)}
          >
            <a>Услуги</a>
          </li>
          <li
            className={isActive === 1 ? headerStyle.active : ""}
            onClick={() => handleActiveButton(1)}
          >
            <a>Этапы работы</a>
          </li>
          <li
            className={isActive === 2 ? headerStyle.active : ""}
            onClick={() => handleActiveButton(2)}
          >
            <a>Портфолио</a>
          </li>
          <li
            className={isActive === 3 ? headerStyle.active : ""}
            onClick={() => handleActiveButton(3)}
          >
            <a>Контакты</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
