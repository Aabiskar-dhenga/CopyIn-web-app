import styles from "./Sidebar.module.css";
import { LuLayoutDashboard } from "react-icons/lu";
import { PiWallDuotone } from "react-icons/pi";
import { LiaTelegram } from "react-icons/lia";
import { FaRegHandPaper } from "react-icons/fa";
import { AiOutlineGlobal } from "react-icons/ai";
import { FaWpforms } from "react-icons/fa";
import { Link } from "react-router-dom";

// FaRegHand
// AiOutlineGlobal
// FaWpforms;
const Sidebar = () => {
  return (
    <div className={styles.sidebar}>
      <div className={styles.sidebar_header}>
        <img
          width="94"
          height="94"
          src="https://img.icons8.com/3d-fluency/94/puzzle.png"
          alt="puzzle"
        />
        <h2 className={styles.app_logo_text}>CopyIn</h2>
      </div>
      <div className={styles.sidebar_list}>
        <div className={styles.first_sidebar}>
          <div className={`${styles.sidebar_list_item} ${styles.active_item}`}>
            {/*  */}
            <LuLayoutDashboard />
            <p>Dashboard</p>
          </div>
          <Link to={"/wall"} className={styles.sidebar_list_item}>
            {/*  */}
            <PiWallDuotone />
            <p>My Walls</p>
          </Link>
          <div className={styles.sidebar_list_item}>
            {/*  */}
            <LiaTelegram />
            <p>Share Wall</p>
          </div>
        </div>
        <div className={styles.second_sidebar}>
          <h3 className={styles.collection_review_text}>COLLECT REVIEWS</h3>
          <div className={styles.second_sidebar_list}>
            <div className={styles.sidebar_list_item}>
              <FaRegHandPaper />
              <p>Mannually</p>
            </div>
            <div className={styles.sidebar_list_item}>
              {/*  */}
              <FaWpforms />
              <p>Via Form </p>
            </div>
            <div className={styles.sidebar_list_item}>
              <AiOutlineGlobal />
              <p>From Web</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
