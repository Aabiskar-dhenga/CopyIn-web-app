import React from "react";
import styles from "./Editreview.module.css";
import { CgProfile } from "react-icons/cg";
const Review = () => {
  return (
    <div className={styles.editreviewParent}>
      <h1>Editing Review Review name</h1>
      <div className={styles.uploadDiv}>
        <div className={styles.uploadWrapper}>
          <CgProfile />
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
      <div className={styles.namebioDiv}>
        <p>Name </p>
        <p>Bio</p>
      </div>
      <div>
        <input type="text" placeholder="Aabiskar" />
        <input type="text" placeholder="Dhenga" />
      </div>
      <div className="buttonWrapper">
        <button>Video , Audio , Image</button>
      </div>
      <div>
        <input type="text" placeholder="esssssssssssssjjjjh" />
        <input type="text" placeholder="Supporte a markdown" />
      </div>
      <textarea name=""></textarea>
    </div>
  );
};

export default Review;
