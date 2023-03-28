import clsx from "clsx";
import styles from "./Footer.module.scss";
function Footer() {
  return (
    <div className={clsx(styles.footer)}>
      <ul className={clsx(styles.footerList)}>
        <li className={clsx("nav-item", styles.navItem)}>
          <a
            className="nav-link"
            href="https://twitter.com/NotHaruuuuuuuu"
            target="_blank"
          >
            <i className={clsx("fa-brands fa-twitter", styles.twitterLink)}></i>
          </a>
        </li>
        <li className={clsx("nav-item", styles.navItem)}>
          <a
            className="nav-link"
            href="https://www.facebook.com/longdo2209/"
            target="_blank"
          >
            <i
              className={clsx("fa-brands fa-facebook", styles.facebookLink)}
            ></i>
          </a>
        </li>
      </ul>
      <p className={clsx(styles.description)}>
        Tel: (+84) 852220900 <br></br>
        Email: dohuuhailong@gmail.com
      </p>
    </div>
  );
}

export default Footer;
