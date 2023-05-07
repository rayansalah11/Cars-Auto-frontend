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
            New Top Product High Quality
          </h1>
          <p className="pt-5 text-[16px] font-[Poppins] font-[400] text-[#000000ba]">
            Excepteur sint occaecat cupidatat non proident 
          </p>
          <Link to="/products" className="inline-block">
            <div className={`${styles.button} mt-5`}>
              <span className="text-[#fff] font-[Poppins] text-[18px]">
                Shop Now
              </span>
            </div>
          </Link>
        </div>
        <img src="https://www.pngkit.com/png/detail/66-663677_rolls-royce-png-download-image-rolls-royce-phantom.png" alt="Mustang" className="w-[900px] h-auto object-contain" />
      </div>
  );
}; 

export default Hero;
