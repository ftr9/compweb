import React from 'react';
import Image from 'next/image';
import type { IconType } from 'react-icons';
import Link from 'next/link';

interface IContactCardProp {
  contactName: string;
  Icon: IconType;
  contactLink: string;
}

const ContactCard = ({ contactName, Icon, contactLink }: IContactCardProp) => {
  return (
    <Link
      href={contactLink}
      className="bg-[#111111] rounded-md flex w-[90%]  md:max-w-[500px] mx-auto p-2 my-5 items-center  shadow-sm shadow-[#ffffff1c]"
    >
      <div className=" h-10 w-10 bg-[#090909] rounded-full flex justify-center items-center ">
        <Icon className="text-[#00D1FF] text-[30px]" />
      </div>
      <p className="flex-1 text-center text-[13px] md:text-sm">{contactName}</p>
    </Link>
  );
};

export default ContactCard;
