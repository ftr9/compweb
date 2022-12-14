import React from 'react';
import SecHeading from '../../heading/SecHeading';
import SecParagraph from '../../paragraph/SecParagraph';
import LottieContainer from '../../lottieContainer/LottieContainer';
import TeamsAnimation from '../../lottieanimation/teams.json';
const Teams = () => {
  return (
    <div id="teams">
      <SecHeading text="What About our Teams?" />
      <LottieContainer animationData={TeamsAnimation} />
      <SecParagraph text="We are a group of experienced and highly valued individuals working together to build a robust products. We are productive and smarter enough to make your dream project to reality. Just try us you will get the result." />
      <SecParagraph text="We are a group of experienced and highly valued individuals working together to build a robust products. We are productive and smarter enough to make your dream project to reality. Just try us you will get the result." />
    </div>
  );
};

export default Teams;