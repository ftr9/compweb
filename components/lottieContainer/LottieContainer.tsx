import React from 'react';
import Lottie from 'react-lottie-player';
const LottieContainer = ({ animationData }: { animationData: Object }) => {
  return (
    <Lottie
      loop
      animationData={animationData}
      play
      className=" md:h-[400px] md:w-[400px] mx-auto h-[250px] sm:w-[300px] w-[100%]"
    />
  );
};

export default LottieContainer;
