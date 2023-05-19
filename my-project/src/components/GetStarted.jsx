import styles from "../style" ;
import { arrowUp } from "../assets";


const GetStarted = () => (
    <div className= {` ${styles.flexCenter} 
    h-[120px] w-[120px] bg-blue-gradient
    rounded-full p-[2px] cursor-pointer`}>
      <div className={` ${styles.flexCenter} flex-col
       w-[100%] h-[100%] rounded-full bg-primary `}>
        <div className={` ${styles.flexStart} flex-row`}>
          <p className="font-poppins font-medium
          text-[18px] leading-[23px] mr-2 ">
            <span className=" text-gradient">Get</span>
          </p>
          <img src={arrowUp} alt="arrow"
          className=" object-contain h-[23px] w-[23px]
          " />
        </div>
        <p className="font-poppins font-medium
          text-[18px] leading-[23px] ">
            <span className=" text-gradient">Started</span>
          </p>

      </div>

    </div>
)


export default GetStarted