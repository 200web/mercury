import React from "react";
import footer from "../scss/components/footer.module.scss";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className={footer.bodyFooter}>
      <footer className={footer.containerFooter}>
        <div className={footer.contentFooter}>
          <main>
            <span>
              © 2024 Mercury Arts - GEORGIY ZALETSKI NIP: 7011208239 REGON:
              528821567
            </span>
            <span>
              web: <a href="https://t.me/tsyhankovah">@tsyhankovah</a>
            </span>
          </main>
          <label className={footer.policy}>
            <Link to="/policy">
              <span>Политика Конфиденциальности</span>
            </Link>
          </label>
        </div>
      </footer>
    </footer>
  );
};

export default Footer;
