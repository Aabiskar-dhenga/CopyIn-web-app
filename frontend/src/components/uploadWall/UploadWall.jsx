import React, { useRef, useState } from "react";
import styles from "./uploadWall.module.css";
import { AiOutlineCloudUpload } from "react-icons/ai";
import { uploadWallColorsArr } from "../../utils/data";
import { color } from "framer-motion";
import { RiAncientGateFill } from "react-icons/ri";

const UploadWall = () => {
  const fileRef = useRef();
  const [selectedColor, setSelectedColor] = useState("#6346FA");
  return (
    <>
      <div className={styles.uploadWall_container}>
        <div className={styles.uploadWall_content}>
          <h1 className={styles.wall_heading}>
            Editing <span>Mural name</span>
          </h1>
          <p className={styles.wallHeading_para}>
            After creation, you will have a dedicated wall to murder distrust of
            your potential customers.
          </p>
          <form className={styles.form}>
            <div className={styles.inputItem}>
              <label>
                Wall name <span>*</span>
              </label>
              <input type="text" placeholder="choosenname" required />
              <p>our url will be: domain.com/wall/choosenname</p>
            </div>
            <div className={styles.wall_avatar}>
              <div className={styles.upload_avatar}>
                <h2>Wall avatar</h2>
                <div className={styles.wall_avatar_img_wrapper}>
                  <RiAncientGateFill />
                </div>

                <button
                  className={styles.uploadAvatar_wrapper}
                  onClick={() => fileRef.current.click()}
                >
                  <p>Upload avatar</p>
                  <AiOutlineCloudUpload />
                </button>
                <input ref={fileRef} style={{ display: "none" }} type="file" />
              </div>
              <div className={styles.customize_avatar}>
                <h2>Customize</h2>
                <div className={styles.choose_colors_container}>
                  {uploadWallColorsArr.map((colors) => (
                    <div
                      onClick={() => setSelectedColor(colors)}
                      style={{ background: colors }}
                      className={`${styles.choose_colors} ${
                        selectedColor === colors && styles.current_color
                      }`}
                    ></div>
                  ))}
                </div>
                <div className={styles.customize_field}>
                  <div
                    style={{ background: selectedColor }}
                    className={styles.selected_color}
                  ></div>
                  <p className={styles.selected_color_code}>{selectedColor}</p>
                </div>
              </div>
            </div>
            <div className={styles.inputItem}>
              <label>
                Wall title <span>*</span>
              </label>
              <input type="text" placeholder="your title here" required />
            </div>
            <div className={styles.inputItem}>
              <label>Description</label>
              <textarea placeholder="Description"></textarea>
            </div>
            <div className={styles.btn_wrapper}>
              <button className={styles.backWall_btn}>
                <img src="asjk" alt="btn" />
                Back
              </button>
              <button className={styles.saveWall_btn}>Save wall</button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default UploadWall;
