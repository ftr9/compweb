import React from 'react';

interface ISecParagraph {
  text: string;
}

const SecParagraph = ({ text }: ISecParagraph) => {
  return (
    <p className="w-[90%]  md:w-[60%] mx-auto text-center text-[14px] md:text-[18px] mt-5 text-gray-400">
      {text}
    </p>
  );
};

export default SecParagraph;
