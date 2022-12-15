import React, { useEffect, useRef } from 'react';
import codingAnimation from '../../lottieanimation/coding.json';
import { IoCalculator } from 'react-icons/io5';
import LottieContainer from '../../lottieContainer/LottieContainer';
import { useRouter } from 'next/navigation';
import { Element, scroller } from 'react-scroll';

const Home = () => {
  const router = useRouter();
  const contactUsClickHandle = () => {
    scroller.scrollTo('contact', {
      duration: 200,
      smooth: true,
    });
  };
  return (
    <Element name="home">
      <LottieContainer animationData={codingAnimation} />
      <h1 className="text-3xl text-center font-lato900 md:text-6xl bg-gradient-to-r from-cyan-500 to-blue-500 bg-clip-text text-transparent ">
        DREAM . BUILD . LAUNCH
      </h1>
      <p className="w-[100%] text-gray-400 text-center md:w-[60%] mx-auto text-[15px] md:text-xl mt-5">
        Code Station is a #1 new established company for building your dream
        project in a reliable and optimal way.{' '}
      </p>
      <button
        onClick={contactUsClickHandle}
        className="mt-10 flex space-x-5 items-center justify-center py-3 rounded-sm mx-auto w-[200px] bg-gradient-to-r from-cyan-500 to-blue-500"
      >
        <span>contact us</span>
        <IoCalculator className=" h-5 w-5" />
      </button>
    </Element>
  );
};

export default Home;
