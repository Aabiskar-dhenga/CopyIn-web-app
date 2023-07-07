import React from "react";
import styles from "./Editreview.module.css";
import { CgProfile } from "react-icons/cg";
import { BsCloudUpload } from "react-icons/Bs";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import { TiTick } from "react-icons/ti";
import { LuSave } from "react-icons/lu";
const Review = () => {
  return (
    <div className={styles.editreviewParent}>
      <form className={styles.form_content}>
        <h1>Editing Review Review name</h1>
        <div className={styles.uploadDiv}>
          <div className={styles.uploadWrapper}>
            <CgProfile className={styles.editReviewerProfile} />
            <div className={styles.uploadBtnWrapper}>
              <button className={styles.uploadAvatar}>Upload avatar</button>
              <BsCloudUpload />
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
        <div className={styles.userNameDiv}>
          <input
            className={styles.userName}
            type="text"
            placeholder="Aabiskar"
          />
          <input className={styles.userName} type="text" placeholder="Dhenga" />
        </div>
        <div className={styles.buttonWrapper}>
          <button className={styles.uploaderBtn}>
            Upload Video , Audio , Image
          </button>
          <BsCloudUpload />
        </div>
        <div>
          <h3>Type or Paste the review</h3>
        </div>
        <textarea className={styles.editReviewTextarea} name=""></textarea>
        <div className={styles.review_giver_parent}>
          <div className={styles.reviewGiverDiv}>
            <div className={styles.tickDivWrapper}>
              <div className={styles.tickWrapper}>
                <TiTick className={styles.tickIcon} />
              </div>
              <p className={styles.reviewParagraph}>Review</p>
            </div>
            <div className={styles.ratingWrapper}>
              <AiFillStar className={styles.yellowRatings} />
              <AiFillStar className={styles.yellowRatings} />
              <AiFillStar className={styles.yellowRatings} />
              <AiFillStar className={styles.greyRatings} />
              <AiFillStar className={styles.greyRatings} />
            </div>
          </div>

          <div className={styles.reviewGiverDiv}>
            <div className={styles.tickDivWrapper}>
              <div className={styles.tickWrapper}>
                <TiTick className={styles.tickIcon} />
              </div>
              <p className={styles.reviewParagraph}>External link</p>
            </div>
            <div className={styles.giveStarReview}>
              <input
                className={styles.externalLink}
                type="text"
                placeholder="www.goggle.com"
              />
            </div>
          </div>

          <div className={styles.reviewGiverDiv}>
            <div className={styles.tickDivWrapper}>
              <div className={styles.tickWrapper}>
                <TiTick className={styles.tickIcon} />
              </div>
              <p className={styles.reviewParagraph}>Insert logo in footer</p>
            </div>

            <div className={styles.insertbuttonWrapper}>
              <button className={styles.insertBtn}>Insert Logo here</button>
              <BsCloudUpload />
            </div>
          </div>
        </div>
        <div className={styles.saveBtnWrapper}>
          <div className={styles.saveBtnDiv}>
            <LuSave className={styles.saveIcon} />
            <button className={styles.saveBtn}>Save</button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Review;
