import React, { useId } from 'react';
import SecHeading from '../../heading/SecHeading';
import LottieContainer from '../../lottieContainer/LottieContainer';
import coding2Data from '../../lottieanimation/coding2.json';
import SecParagraph from '../../paragraph/SecParagraph';
import ImageWithText from '../../cards/ImageWithText';
import { Element } from 'react-scroll';

const servicesAtCodeStation = [
  {
    name: 'Web Development',
    image: '/assets/section/webdev.jpg',
  },
  {
    name: 'UI/UX Design',
    image: '/assets/section/uiux.jpg',
  },
  {
    name: 'App Development',
    image: '/assets/section/appdev.jpg',
  },
  {
    name: 'Digital Marketing',
    image: '/assets/section/digitalmarketing.jpg',
  },
  {
    name: 'Graphics Designing',
    image: '/assets/section/graphicdesign.jpg',
  },
  {
    name: 'Data Entry',
    image: '/assets/section/dataentry.jpg',
  },
  {
    name: 'Content Writing',
    image: '/assets/section/contentwriting.jpg',
  },
];

const Services = () => {
  return (
    <Element name="services" className="mt-20">
      <SecHeading text="What we can do ?" />
      <LottieContainer animationData={coding2Data} />
      <SecParagraph
        text="We can do wide variety of projects ranging from development to design so you can
      take your Business to next level and excel it. Below Down are
      the list of the services we are capable of providing."
      />
      <div className=" flex md:w-[80%] mx-auto py-10 flex-wrap justify-center ">
        {servicesAtCodeStation.map(service => (
          <ImageWithText
            key={useId()}
            text={service.name}
            imageUrl={service.image}
          />
        ))}
      </div>
    </Element>
  );
};

export default Services;
