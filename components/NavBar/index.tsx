import Image from 'next/image';
import { Link as ReactScrollLink } from 'react-scroll';

const NavBar = () => {
  return (
    <div className="flex z-50 justify-between items-center  py-5 md:p-2 fixed top-[-55px] md:top-[-60px] w-[98%] md:w-[90%]  left-[50%] translate-x-[-50%]">
      <div className=" relative h-[150px] w-[150px] md:h-[260px] md:w-[260px] ">
        <Image
          src={'/assets/logo/firtlogo3dwithlessreflection.png'}
          alt={'company logo'}
          fill
          className=" object-contain z-50"
        />
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
              About us
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
