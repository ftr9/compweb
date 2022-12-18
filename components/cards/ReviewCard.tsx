import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
interface IReviewCardProps {
  clientName: string;
  text: string;
  clientImage: string;
  clientLink: string;
}

const ReviewCard = ({
  clientImage,
  clientName,
  text,
  clientLink,
}: IReviewCardProps) => {
  return (
    <Link
      target={'_blank'}
      href={clientLink}
      className="bg-[#111111] rounded-md basis-[90%] md:flex-shrink-0 md:flex-grow md:basis-[250px] m-0 my-3 mx-auto md:m-5 p-5 "
    >
      <div className="flex items-center space-x-4">
        <div className="relative rounded-full overflow-hidden h-10 w-10">
          <Image src={clientImage} fill alt="logo" />
        </div>
        <h2>{clientName}</h2>
      </div>
      <p className=" mt-2 text-gray-400 rounded-sm text-center md:text-start text-[13px] md:text-sm">
        {text}
      </p>
      <span className="text-[12px] md:text-sm text-center block mt-5 text-gray-600">
        click to see their details
      </span>
    </Link>
  );
};

export default ReviewCard;
