import React from "react";
import { Link } from "react-router-dom";
import styles from "../../../styles/styles";

const Hero = () => {
  return (

      <div className={`flex justify-between w-[40%] 800px:w-[60%] h-full mx-auto ${styles.section}`}>
        <div className="self-center">
          <h1
            className={`text-[35px] leading-[1.2] 700px:text-[60px] text-[#000000] font-[700] capitalize`}
          >
            Your One-Stop Shop for All Things Oil</h1>
          <p className="pt-5 text-[16px] font-[Poppins] font-[400] text-[#000000ba]">
          Your Reliable Source for Ordering Oil Online        </p>
          <Link to="/products" className="inline-block">
            <div className={`${styles.button} mt-5`}>
              <span className="text-[#fff] font-[Poppins] text-[18px]">
                Shop Now
              </span>
            </div>
          </Link>
        </div>
        <img src="https://www.pngall.com/wp-content/uploads/5/Motor-Oil-PNG-Image.png" alt="Mustang" className="w-[700px] h-auto object-contain" />
      </div>
  );
}; 

export default Hero;