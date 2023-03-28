import styles from "./Header.module.scss";
import clsx from "clsx";
import { Link } from "react-router-dom";

function Header() {
  return (
    <nav className={clsx("navbar navbar-expand", styles.navbar)}>
      <div className="container">
        <Link className={clsx(styles.navbarName, "navbar-brand")} to="/portfolio/">
          Đỗ Hữu Hải Long
        </Link>
        <ul className="navbar-nav d-flex">
          <li className={clsx("nav-item", styles.navItem)}>
            <a
              className="nav-link"
              href="https://twitter.com/NotHaruuuuuuuu"
              target="_blank"
            >
              <i
                className={clsx("fa-brands fa-twitter", styles.twitterLink)}
              ></i>
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
          <li className={clsx("nav-item", styles.navItem)}>
            <Link className={clsx("nav-link", styles.navLink)} to="/portfolio/about">
              Giới thiệu
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Header;
