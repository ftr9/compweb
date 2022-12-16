import React from 'react';
import SecHeading from '../../heading/SecHeading';
import SecParagraph from '../../paragraph/SecParagraph';
import LottieContainer from '../../lottieContainer/LottieContainer';
import TeamsAnimation from '../../lottieanimation/teams.json';
import { Element } from 'react-scroll';

const Teams = () => {
  return (
    <Element name="teams">
      <SecHeading text="What About our Teams and Company?" />
      <LottieContainer animationData={TeamsAnimation} />
      <SecParagraph text="Founded in 2022, CODE STATION has grown from a small team of technologists into a full-service IT company with a diverse range of offerings. Our mission is simple: to help our clients stay ahead of the curve by providing the best in class IT solutions." />
      <SecParagraph text="We pride ourselves on our commitment to customer satisfaction, and our team is made up of skilled professionals with a passion for technology. From cloud computing and data management to cybersecurity and IT support, we have the expertise to help our clients succeed." />
      <SecParagraph text="In everything we do, we are guided by our core values of integrity, innovation, and collaboration. These values shape our approach to business and drive us to deliver the highest quality solutions to our clients." />
    </Element>
  );
};

export default Teams;
