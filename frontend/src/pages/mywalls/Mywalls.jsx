import Sidebar from "../../components/sidebar/Sidebar";
import WallItem from "../../components/Mywalls/WallItem/WallItem";
import styles from "./Mywalls.module.css";
import Navbar from "../../components/Navbar/Navbar";
import { AiOutlineDelete } from "react-icons/ai";
import { IoIosAddCircleOutline } from "react-icons/io";
import { Link } from "react-router-dom";

const Mywalls = () => {
  return (
    <div className={styles.mywalls}>
      <Sidebar />
      <div className={styles.wall_content_wrapper}>
        <Navbar />
        <div className={styles.wall_contents}>
          <div className={styles.wall_content_header}>
            <h1>My walls</h1>
            <div className={styles.wall_content_header_action_box}>
              <Link to={"/uploadwall"}>
                <button className={styles.new_button}>
                  <IoIosAddCircleOutline />
                  <p>New Wall </p>
                </button>
              </Link>

              <button>
                <AiOutlineDelete />
                <p>Delete </p>
              </button>
            </div>
          </div>
          <div className={styles.wall_items_container}>
            <WallItem />
            <WallItem />
            <WallItem />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Mywalls;
