import React from 'react';
import Link from 'next/link';
import {
  IoHome,
  IoHammer,
  IoPeople,
  IoStarHalf,
  IoReader,
} from 'react-icons/io5';
const BottomNav = () => {
  return (
    <ul className=" bg-gradient-to-br from-cyan-400 to-blue-400 z-50 md:hidden px-1 py-2 fixed bottom-0  text-gray-100 text-[10px] w-[100%] left-1/2 -translate-x-1/2 flex justify-between">
      <li>
        <Link href={'#home'} className="  space-y-[0.8px]">
          <IoHome className="mx-auto text-[15px]" />
          <span className="block">Home</span>
        </Link>
      </li>
      <li>
        <Link href={'#services'} className="space-y-[0.8px]">
          <IoHammer className="mx-auto text-[15px] " />
          <span className="block">Services</span>
        </Link>
      </li>
      <li>
        <Link href={'#teams'} className="space-y-[0.8px]">
          <IoPeople className="mx-auto text-[15px]" />
          <span className="block">Teams</span>
        </Link>
      </li>
      <li>
        <Link href={'#review'} className="space-y-[0.8px]">
          <IoStarHalf className="mx-auto text-[15px]" />
          <span className="block">Review</span>
        </Link>
      </li>
      <li>
        <Link href={'#contact'} className="space-y-[0.8px]">
          <IoReader className="mx-auto text-[15px]" />
          <span className="block">Contact</span>
        </Link>
      </li>
    </ul>
  );
};

export default BottomNav;
