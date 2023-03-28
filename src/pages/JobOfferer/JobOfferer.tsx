import styles from "./JobOfferer.module.scss";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

function JobOfferer() {
  return (
    <div className="jobofferer">
      <div className="container">
        <motion.h1
          className={styles.title}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          JobOfferer
        </motion.h1>
        <motion.p
          className={styles.subTitle}
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
            src="../../src/assets/img/project2.png"
            alt="JobOfferer Administrator"
          />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: "-5vh" }}
          animate={{ opacity: 1, y: "0" }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5, delay: 1 }}
        >
          <div className={styles.descriptionBlock}>
            <h1 className={styles.descriptionTitle}>Mục tiêu</h1>
            <p className={styles.description}>
              Anh ấy muốn tạo ra một chợ việc làm nơi mà các nhà tuyển dụng có
              thể dễ dàng tìm kiếm thông tin về những nhân sự phù hợp với công
              ty. Ngược lại, những đối tượng chưa có việc làm cũng có thể tìm
              kiếm những việc làm phù hợp với bản thân.
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
              Bộ công cụ tìm kiếm những việc làm đang được đăng tuyển <br></br>
              Tìm kiếm những công ty đang cần nhân sự <br></br>
              Ứng tuyển vào công việc
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

export default JobOfferer;
