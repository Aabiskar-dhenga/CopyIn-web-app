import React from "react";
import styles from "./Dashboard.module.css";
import Usercollection from "../UserCollections/Usercollection";

const Dashboard = () => {
  return (
    <div className={styles.DashboardParent}>
      <h1 className={styles.navH1text}>Dashboard</h1>
      <div className={styles.analyticsWrapper}>
        <div className={styles.analyticsBox}>
          <h3>My Walls</h3>
          <h1>3</h1>
          <p>1/1 walls available</p>
        </div>
        <div className={styles.analyticsBox}>
          <h3>Total reviews</h3>
          <h1>23</h1>
          <p>24/25 reviews available</p>
        </div>
        <div className={styles.analyticsBox}>
          <h3>Current Plan</h3>
          <h1>Free</h1>
          <p>choose a plan </p>
        </div>
      </div>

      <div className={styles.userCollection}>
        <h1>Last Collection</h1>
        <div className={styles.userDetails}>
          <Usercollection />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
