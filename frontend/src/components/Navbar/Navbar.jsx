import React from "react";
import styles from "./Navbar.module.css";
import { BsPencil } from "react-icons/Bs";
import { RiProfileLine } from "react-icons/ri";
import { RiArrowDropDownLine } from "react-icons/ri";

const Navbar = () => {
  return (
    <div className={styles.navParent}>
      <div className={styles.topNavBarLeftSide}>
        <div className={styles.wallNameBox}>
          <div className={styles.wallInnerBox}>
            <div className={styles.wall_name_icon_box}>
              <RiProfileLine />
            </div>
            <h3>Wall name</h3>
          </div>
          {/* icon */}
          <RiArrowDropDownLine className={styles.dropDownIcon} />
        </div>
        <div className={styles.linksBox}>
          <input type="text" placeholder="domain.com/choosenwallname..." />
        </div>
        <BsPencil className={styles.pencil_icon} />
      </div>
      <div className={styles.topNavBarRightSide}>
        <img
          className={styles.profileImg}
          width="64"
          height="64"
          src="https://images.pexels.com/photos/4380127/pexels-photo-4380127.jpeg?auto=compress&cs=tinysrgb&w=400"
          alt="person-male--v5"
        />{" "}
        <div className={styles.userInfo}>
          <h3 className={styles.userName}>Ryandyal</h3>
          <p className={styles.userEmail}>ryandyal12@gmail.com</p>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
