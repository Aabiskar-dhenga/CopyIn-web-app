import styles from "./wallItem.module.css"
import { PiPencilLight } from "react-icons/pi"
import { AiOutlineEye } from "react-icons/ai"



const WallItem = () => {
  return (
    <div className={styles.wall_item}>
        <div className={styles.wall_left_items}>
            <div  className={styles.selectBox}>

            </div>
        <div className={styles.wall_info_box}>
            
            <img className={styles.wall_avatar} src="https://images.pexels.com/photos/3214944/pexels-photo-3214944.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="wallavatar" />
            <div className={styles.wall_info}>
                <h1>Wall name</h1>
                <div>
                    <p className={styles.wall_basic_info_text}><span>6 reviews.</span> Created on Jun29,2023</p>
                </div>

            </div>
        </div>

        </div>
        <div className={styles.wall_item_action_box}>
            <PiPencilLight/>
            <AiOutlineEye/>
        </div>

    </div>
  )
}

export default WallItem