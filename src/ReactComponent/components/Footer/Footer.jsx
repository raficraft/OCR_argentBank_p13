import Style from "./Footer.module.scss";

const Footer = () => (
  <footer className={Style.footer}>
    <p className={Style["footer-text"]}>Copyright 2020 Argent Bank</p>
  </footer>
);

export default Footer;
