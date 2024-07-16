import React from "react";
import footer from "../scss/components/footer.module.scss";

const Footer = () => {
  return (
    <footer className={footer.bodyFooter}>
      <footer className={footer.containerFooter}>
        <div className={footer.contentFooter}>
          <span>Mercury Arts</span>
        </div>
      </footer>
    </footer>
  );
};

export default Footer;
