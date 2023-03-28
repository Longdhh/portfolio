import styles from "./Administrator.module.scss";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

function Administrator() {
  return (
    <div className="administrator">
      <div className="container">
        <motion.h1
          className={styles.title}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          JobOfferer Administrator
        </motion.h1>
        <motion.p
          className={styles.subTitle}
          initial={{ opacity: 0, y: "-5vh" }}
          animate={{ opacity: 1, y: "0" }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          Công cụ hỗ trợ cho quản trị viên quản lý hệ thống JobOfferer
        </motion.p>
        <motion.img
          className={styles.image}
          src="../../src/assets/img/project1.png"
          alt="JobOfferer Administrator"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        />
        <motion.div
          initial={{ opacity: 0, y: "-5vh" }}
          animate={{ opacity: 1, y: "0" }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5, delay: 1 }}
        >
          <div className={styles.descriptionBlock}>
            <h1 className={styles.descriptionTitle}>Mục tiêu</h1>
            <p className={styles.description}>
              Anh ấy muốn tạo ra một công cụ quản trị hệ thống JobOfferer giúp
              cho việc quản lý hệ thống trở nên dễ dàng hơn
            </p>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: "-5vh" }}
          animate={{ opacity: 1, y: "0" }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5, delay: 1.3 }}
        >
          <div className={styles.descriptionBlock}>
            <h1 className={styles.descriptionTitle}>Framework & thư viện</h1>
            <p className={styles.description}>
              Bootstrap<br></br>
              Angular<br></br>
              .NET WebAPI
            </p>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: "-5vh" }}
          animate={{ opacity: 1, y: "0" }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5, delay: 1.6 }}
        >
          <div className={styles.descriptionBlock}>
            <h1 className={styles.descriptionTitle}>Tính năng chính</h1>
            <p className={styles.description}>
              Responsive giúp người dùng dễ dàng trải nghiệm trên điện thoại
              <br></br>
              Bộ công cụ tìm kiếm giúp dễ dàng cho việc tra cứu thông tin{" "}
              <br></br>
              Quản lý tài khoản
            </p>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: "-5vh" }}
          animate={{ opacity: 1, y: "0" }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5, delay: 2 }}
        >
          <Link className={styles.backButton} to="/">
            Quay về trang chủ
          </Link>
        </motion.div>
      </div>
    </div>
  );
}

export default Administrator;
