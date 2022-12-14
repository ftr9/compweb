import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const NavBar = () => {
  return (
    <div className="flex z-50 justify-between items-center  py-5 md:p-5 fixed top-0 w-[90%]  left-[50%] translate-x-[-50%]">
      <div className=" relative h-[40px] w-[40px] md:h-[80px] md:w-[80px]">
        <Image src={'/assets/logo/logo.png'} alt={'company logo'} fill />
      </div>
      <div className="hidden md:block">
        <ul className="[&>*]:hover:cursor-pointer flex space-x-8">
          <li className="hoverNav">
            <Link href={'#home'}>Home</Link>
          </li>
          <li className="hoverNav">
            <Link href={'#services'}>Services</Link>
          </li>
          <li className="hoverNav">
            <Link href={'#teams'}>Teams</Link>
          </li>
          <li className="hoverNav">
            <Link href={'#review'}>Review</Link>
          </li>
          <li className="hoverNav">
            <Link href={'#contact'}>Contact</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default NavBar;
