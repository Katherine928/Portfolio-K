import "./footer.css";
import { links, socials } from "./data";

const Footer = () => {
  return (
    <footer>
      <div className="container footer__container">
        <ul className="nav__menu">
          {links.map((link) => (
            <li key={link.id}>
              <a href={link.link}>{link.title}</a>
            </li>
          ))}
        </ul>
        <div className="footer__socials">
          {socials.map((social) => (
            <a
              href={social.link}
              key={social.id}
              target="_blank"
              rel="noopener noreferrer"
            >
              {social.icon}
            </a>
          ))}
        </div>
      </div>
      <div className="footer__copyright">
        <small>2023 KATHERINE BROOKS &copy; All Rights Reserved</small>
      </div>
    </footer>
  );
};

export default Footer;
