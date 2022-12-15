import Image from 'next/image';
import React from 'react';

interface IImageWithText {
  imageUrl: string;
  text: string;
}

const ImageWithText = ({ imageUrl, text }: IImageWithText) => {
  return (
    <div
      className=" h-[150px] relative w-[220px] my-3  md:m-5
      flex items-center justify-center overflow-hidden rounded-sm
    "
    >
      <Image src={imageUrl} fill alt={text} className=" object-cover" />
      <div className=" absolute top-0 left-0 h-[150px] w-[220px] bg-[#0000006b] hover:bg-transparent transition-all duration-150 ease-linear"></div>
      <div className=" z-10 bg-[#000000af] py-2 px-3 text-sm">{text}</div>
    </div>
  );
};

export default ImageWithText;
