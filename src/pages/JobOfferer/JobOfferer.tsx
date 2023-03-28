import styles from "./JobOfferer.module.scss";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import clsx from "clsx";

function JobOfferer() {
  return (
    <div className="jobofferer">
      <div className="container-fluid">
        <motion.h1
          className={clsx(styles.title, "text-center")}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          JobOfferer
        </motion.h1>
        <motion.p
          className={clsx(styles.subTitle, "text-center")}
          initial={{ opacity: 0, y: "-5vh" }}
          animate={{ opacity: 1, y: "0" }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          Giải pháp tìm kiếm việc làm
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: "-5vh" }}
          animate={{ opacity: 1, y: "0" }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <img
            className={styles.image}
            src="assets/img/project2.png"
            alt="JobOfferer Administrator"
          />
        </motion.div>
        <div className={styles.descriptionBlock}>
          <motion.h1
            className={clsx(styles.descriptionTitle, "text-center")}
            initial={{ opacity: 0, y: "-5vh" }}
            animate={{ opacity: 1, y: "0" }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5, delay: 1 }}
          >
            Mục tiêu
          </motion.h1>
          <motion.p
            className={clsx(styles.description, "text-center")}
            initial={{ opacity: 0, y: "-5vh" }}
            animate={{ opacity: 1, y: "0" }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5, delay: 1 }}
          >
            Anh ấy muốn tạo ra một chợ việc làm nơi mà các nhà tuyển dụng có thể
            dễ dàng tìm kiếm thông tin về những nhân sự phù hợp với công ty.
            Ngược lại, những đối tượng chưa có việc làm cũng có thể tìm kiếm
            những việc làm phù hợp với bản thân.
          </motion.p>
        </div>
        <div className={styles.descriptionBlock}>
          <motion.h1
            className={clsx(styles.descriptionTitle, "text-center")}
            initial={{ opacity: 0, y: "-5vh" }}
            animate={{ opacity: 1, y: "0" }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5, delay: 1.3 }}
          >
            Framework & thư viện
          </motion.h1>
          <motion.p
            className={clsx(styles.description, "text-center")}
            initial={{ opacity: 0, y: "-5vh" }}
            animate={{ opacity: 1, y: "0" }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5, delay: 1.3 }}
          >
            Bootstrap<br></br>
            Angular<br></br>
            .NET WebAPI
          </motion.p>
        </div>
        <div className={styles.descriptionBlock}>
          <motion.h1
            className={clsx(styles.descriptionTitle, "text-center")}
            initial={{ opacity: 0, y: "-5vh" }}
            animate={{ opacity: 1, y: "0" }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5, delay: 1.6 }}
          >
            Tính năng chính
          </motion.h1>
          <motion.p
            className={clsx(styles.description, "text-center")}
            initial={{ opacity: 0, y: "-5vh" }}
            animate={{ opacity: 1, y: "0" }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5, delay: 1.6 }}
          >
            Responsive giúp người dùng dễ dàng trải nghiệm trên điện thoại
            <br></br>
            Bộ công cụ tìm kiếm những việc làm đang được đăng tuyển <br></br>
            Tìm kiếm những công ty đang cần nhân sự <br></br>
            Ứng tuyển vào công việc
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

export default JobOfferer;
