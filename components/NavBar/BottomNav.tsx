import {
  IoHome,
  IoHammer,
  IoPeople,
  IoStarHalf,
  IoReader,
} from 'react-icons/io5';

import { Link as ReactScrollLink } from 'react-scroll';

const BottomNav = () => {
  return (
    <ul className=" bg-gradient-to-br from-cyan-500 to-[#20bf55] z-50 md:hidden px-4 py-2 fixed bottom-0  text-gray-100 text-[10px] w-[100%] left-1/2 -translate-x-1/2 flex justify-between">
      <li>
        <ReactScrollLink
          to={'home'}
          smooth
          duration={200}
          className="  space-y-[0.8px]"
        >
          <IoHome className="mx-auto text-[15px]" />
          <span className="block">Home</span>
        </ReactScrollLink>
      </li>
      <li>
        <ReactScrollLink
          to={'services'}
          smooth
          duration={200}
          className="space-y-[0.8px]"
        >
          <IoHammer className="mx-auto text-[15px] " />
          <span className="block">Services</span>
        </ReactScrollLink>
      </li>
      <li>
        <ReactScrollLink
          to={'teams'}
          smooth
          duration={200}
          className="space-y-[0.8px]"
        >
          <IoPeople className="mx-auto text-[15px]" />
          <span className="block">About us</span>
        </ReactScrollLink>
      </li>
      <li>
        <ReactScrollLink
          to={'review'}
          smooth
          duration={200}
          className="space-y-[0.8px]"
        >
          <IoStarHalf className="mx-auto text-[15px]" />
          <span className="block">Review</span>
        </ReactScrollLink>
      </li>
      <li>
        <ReactScrollLink
          to={'contact'}
          smooth
          duration={200}
          className="space-y-[0.8px]"
        >
          <IoReader className="mx-auto text-[15px]" />
          <span className="block">Contact</span>
        </ReactScrollLink>
      </li>
    </ul>
  );
};

export default BottomNav;
