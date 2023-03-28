import styles from "./About.module.scss";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

function About() {
  return (
    <div className="about">
      <div className="container">
        <div className="row">
          <div className="col col-xl-6 col-12">
            <motion.h1
              className={styles.title}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
            >
              Xin chào, tôi tên là Đỗ Hữu Hải Long!
            </motion.h1>
            <motion.p
              className={styles.paragraph}
              initial={{ opacity: 0, y: "-5vh" }}
              animate={{ opacity: 1, y: "0" }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              Tôi là một lập trình viên chuyên về mảng website frontend, thông
              thạo những framework hay thư viện phổ biến trong lĩnh vực lập
              trình web hiện nay như ReactJS, VueJS hay Angular.
            </motion.p>
            <motion.p
              className={styles.paragraph}
              initial={{ opacity: 0, y: "-5vh" }}
              animate={{ opacity: 1, y: "0" }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              Bằng những gì đã học được, tôi có thể đưa ra những giải pháp cho
              những vấn đề liên quan tới mảng giao diện, tương tác với người
              dùng trong những website.
            </motion.p>
            <motion.p
              className={styles.paragraph}
              initial={{ opacity: 0, y: "-5vh" }}
              animate={{ opacity: 1, y: "0" }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5, delay: 0.9 }}
            >
              Không ngần ngại nhận những công việc khó là một tính cách giúp tôi
              nhận ra những yếu điểm của bản thân. Cũng như không ngừng tìm kiếm
              những giải pháp IT mới để góp phần nâng cao trải nghiệm người
              dùng.
            </motion.p>
          </div>
          <div className="col col-xl-6 col-12">
            <motion.div
              className={styles.imgHolder}
              initial={{ opacity: 0, y: "-5vh" }}
              animate={{ opacity: 1, y: "0" }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <img
                className={styles.portrait}
                src="assets/img/Untitled.png"
                alt=""
              />
            </motion.div>
            <motion.div
              className={styles.certificate}
              initial={{ opacity: 0, y: "-5vh" }}
              animate={{ opacity: 1, y: "0" }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              <h4 className={styles.subTitle}>Chứng chỉ ngoại ngữ</h4>
              <p className={styles.paragraph}>
                Tiếng Anh IELTS 6.5 <br></br>
                Tiếng Nhật JLPT N3
              </p>
            </motion.div>
          </div>
        </div>
        <motion.div
          initial={{ opacity: 0, y: "-5vh" }}
          animate={{ opacity: 1, y: "0" }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5, delay: 1.3 }}
        >
          <Link className={styles.backButton} to="/portfolio/">
            Quay về trang chủ
          </Link>
        </motion.div>
      </div>
    </div>
  );
}

export default About;
