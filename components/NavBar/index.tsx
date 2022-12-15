import React from 'react';
import Image from 'next/image';
import { Link as ReactScrollLink } from 'react-scroll';

const NavBar = () => {
  return (
    <div className="flex z-50 justify-between items-center  py-5 md:p-5 fixed top-0 w-[90%]  left-[50%] translate-x-[-50%]">
      <div className=" relative h-[40px] w-[40px] md:h-[80px] md:w-[80px]">
        <Image src={'/assets/logo/logo.png'} alt={'company logo'} fill />
      </div>
      <div className="hidden md:block">
        <ul className="[&>*]:hover:cursor-pointer flex space-x-8">
          <li className="hoverNav">
            <ReactScrollLink to={'home'} duration={800} smooth>
              Home
            </ReactScrollLink>
          </li>
          <li className="hoverNav">
            <ReactScrollLink to={'services'} duration={800} smooth>
              Services
            </ReactScrollLink>
          </li>
          <li className="hoverNav">
            <ReactScrollLink to={'teams'} duration={800} smooth>
              Teams
            </ReactScrollLink>
          </li>
          <li className="hoverNav">
            <ReactScrollLink to={'review'} duration={800} smooth>
              Review
            </ReactScrollLink>
          </li>
          <li className="hoverNav">
            <ReactScrollLink to={'contact'} duration={800} smooth>
              Contact
            </ReactScrollLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default NavBar;
