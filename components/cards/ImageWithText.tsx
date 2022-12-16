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
      flex items-end justify-start  rounded-sm
    "
    >
      <Image src={imageUrl} fill alt={text} className=" object-cover" />
      <div className=" absolute top-0 left-0 h-[150px] w-[220px] bg-[#0000006b] hover:bg-transparent transition-all duration-150 ease-linear"></div>
      <div className="translate-x-[-10px] translate-y-[5px] -skew-x-12 text-gray-100  z-10 bg-gradient-to-br from-[#00fffffe] to-[#20bf55] py-2 px-3 text-[14px]">
        {text}
      </div>
    </div>
  );
};

export default ImageWithText;
