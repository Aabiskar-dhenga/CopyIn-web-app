import React from "react";
import Sidebar from "../../components/sidebar/Sidebar";
import styles from "./Home.module.css";
import Navbar from "../../components/Navbar/Navbar";

const Home = () => {
  return (
    <div className={styles.home}>
      <Sidebar />
      <div className={styles.home_content}>
        <Navbar />
      </div>
    </div>
  );
};

export default Home;
