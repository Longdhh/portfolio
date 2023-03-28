import styles from "./Administrator.module.scss";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import clsx from "clsx";

function Administrator() {
  return (
    <div className="administrator">
      <div className="container-fluid">
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
          src="assets/img/project1.png"
          alt="JobOfferer Administrator"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        />
        <div className={styles.descriptionBlock}>
          <motion.h1
            initial={{ opacity: 0, y: "-5vh" }}
            animate={{ opacity: 1, y: "0" }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5, delay: 1 }}
            className={clsx(styles.descriptionTitle, "text-center")}
          >
            Mục tiêu
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: "-5vh" }}
            animate={{ opacity: 1, y: "0" }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5, delay: 1 }}
            className={clsx(styles.description, "text-wrap")}
          >
            Anh ấy muốn tạo ra một công cụ quản trị hệ thống JobOfferer giúp cho
            việc quản lý hệ thống trở nên dễ dàng hơn
          </motion.p>
        </div>
        <div className={styles.descriptionBlock}>
          <motion.h1
            initial={{ opacity: 0, y: "-5vh" }}
            animate={{ opacity: 1, y: "0" }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5, delay: 1.3 }}
            className={clsx(styles.descriptionTitle, "text-center")}
          >
            Framework & thư viện
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: "-5vh" }}
            animate={{ opacity: 1, y: "0" }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5, delay: 1.3 }}
            className={clsx(styles.description, "text-wrap")}
          >
            Bootstrap<br></br>
            Angular<br></br>
            .NET WebAPI
          </motion.p>
        </div>
        <div className={styles.descriptionBlock}>
          <motion.h1
            initial={{ opacity: 0, y: "-5vh" }}
            animate={{ opacity: 1, y: "0" }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5, delay: 1.6 }}
            className={clsx(styles.descriptionTitle, "text-center")}
          >
            Tính năng chính
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: "-5vh" }}
            animate={{ opacity: 1, y: "0" }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5, delay: 1.6 }}
            className={clsx(styles.description, "text-wrap")}
          >
            Responsive giúp người dùng dễ dàng trải nghiệm trên điện thoại
            <br></br>
            Bộ công cụ tìm kiếm giúp dễ dàng cho việc tra cứu thông tin{" "}
            <br></br>
            Quản lý tài khoản
          </motion.p>
        </div>
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
