import React from "react";
import styles from "./Editreview.module.css";
const Review = () => {
  return (
    <div className={styles.editreviewParent}>
      <h1>Editing Review Review name</h1>
      <div className={styles.uploadDiv}></div>
      <div className={styles.uploadWrapper}>
        {/* icon??? */}
        <div>
          <input type="text" placeholder="upload avatar" />
          {/* icon */}
        </div>
      </div>
      <div className={styles.dateWrapper}>
        <input type="date" />
        {/* icons */}
      </div>
    </div>
  );
};

export default Review;
