import clsx from "clsx";
import styles from "./Home.module.scss";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

function Home() {
  return (
    <div className="home">
      <div className="container">
        <motion.h1
          className={clsx(styles.breadCrumb, 'text-center')}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          Các dự án cá nhân
        </motion.h1>
        <div className={styles.projects}>
          <div className="row gy-5">
            <motion.div
              className="col col-xl-6 col-12"
              initial={{ opacity: 0, y: "-5vh" }}
              animate={{ opacity: 1, y: "0" }}
              exit={{ opacity: 0, y: "-5vh" }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              <Link className={styles.projectItem} to="/portfolio/administrator">
                <img
                  className={styles.image}
                  src="assets/img/project1.png"
                  alt="JobOfferer Administrator"
                />
                <p className={styles.projectName}>Administrator</p>
              </Link>
            </motion.div>
            <motion.div
              className="col col-xl-6 col-12"
              initial={{ opacity: 0, y: "-5vh" }}
              animate={{ opacity: 1, y: "0" }}
              exit={{ opacity: 0, y: "-5vh" }}
              transition={{ duration: 0.5, delay: 1 }}
            >
              <Link className={styles.projectItem} to="/portfolio/jobofferer">
                <img
                  className={styles.image}
                  src="assets/img/project2.png"
                  alt="JobOfferer Administrator"
                />
                <p className={styles.projectName}>JobOfferer</p>
              </Link>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
