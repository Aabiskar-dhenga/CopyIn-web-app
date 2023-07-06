import React from "react";
import styles from "./uploadWall.module.css";

const UploadWall = () => {
  return (
    <>
      <div className={styles.uploadWall_container}>
        <div className={styles.uploadWall_content}>
          <h1 className={styles.wall_heading}>
            Editing <span>Mural name</span>
          </h1>
          <p>
            After creation, you will have a dedicated wall to murder distrust of
            your potential customers.
          </p>
          <form className={styles.form}>
            <div className={styles.wallName}>
              <label>
                Wall name <span>*</span>
              </label>
              <input type="text" placeholder="choosenname" />
              <p>our url will be: domain.com/wall/choosenname</p>
            </div>
            <div className="wall_avatar">
              <div className={styles.upload_avatar}></div>
              <div className={styles.customize_avatar}></div>
            </div>
            <div className={styles.inputItem}>
              <label>
                Wall title <span>*</span>
              </label>
              <input type="text" placeholder="your title here" />
            </div>
            <div className={styles.inputItem}>
              <label>Description</label>
              <textarea placeholder="Description"></textarea>
            </div>
            <div className={styles.btn_wrapper}>
              <button>Back</button>
              <button>Save wall</button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default UploadWall;
