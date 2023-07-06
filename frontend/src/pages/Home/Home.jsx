import React from "react";
import Sidebar from "../../components/sidebar/Sidebar";
import styles from "./Home.module.css";
import Navbar from "../../components/Navbar/Navbar";
import Dashboard from "../../components/Dashboard/Dashboard";

const Home = () => {
  return (
    <div className={styles.home}>
      <Sidebar />
      <div className={styles.home_content}>
        <Navbar />
        <Dashboard />
      </div>
    </div>
  );
};

export default Home;
