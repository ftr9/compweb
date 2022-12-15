import React, { useId } from 'react';
import ReviewCard from '../../cards/ReviewCard';
import SecHeading from '../../heading/SecHeading';
import SecParagraph from '../../paragraph/SecParagraph';
import { Element } from 'react-scroll';

const reviewDatas = [
  {
    clientName: 'Mrl 1',
    text: 'some random gibberissh that not actually that good enough as well',
    clientImage:
      'https://scontent.fktm9-2.fna.fbcdn.net/v/t39.30808-6/276297653_1175640276577179_6010080642725450089_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=iK_KuSm_cKkAX-iBG_H&_nc_ht=scontent.fktm9-2.fna&oh=00_AfCxdMpzpJla964zBeKDiKuww_sPacLdmFvrp5x4FoPiTQ&oe=639EBB4E',
  },
  {
    clientName: 'Mrl 1',
    text: 'some random gibberissh that not actually that good enough as well',
    clientImage:
      'https://scontent.fktm9-2.fna.fbcdn.net/v/t39.30808-6/276297653_1175640276577179_6010080642725450089_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=iK_KuSm_cKkAX-iBG_H&_nc_ht=scontent.fktm9-2.fna&oh=00_AfCxdMpzpJla964zBeKDiKuww_sPacLdmFvrp5x4FoPiTQ&oe=639EBB4E',
  },
  {
    clientName: 'Mrl 1',
    text: 'some random gibberissh that not actually that good enough as well',
    clientImage:
      'https://scontent.fktm9-2.fna.fbcdn.net/v/t39.30808-6/276297653_1175640276577179_6010080642725450089_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=iK_KuSm_cKkAX-iBG_H&_nc_ht=scontent.fktm9-2.fna&oh=00_AfCxdMpzpJla964zBeKDiKuww_sPacLdmFvrp5x4FoPiTQ&oe=639EBB4E',
  },
  {
    clientName: 'Mrl 1',
    text: 'some random gibberissh that not actually that good enough as well',
    clientImage:
      'https://scontent.fktm9-2.fna.fbcdn.net/v/t39.30808-6/276297653_1175640276577179_6010080642725450089_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=iK_KuSm_cKkAX-iBG_H&_nc_ht=scontent.fktm9-2.fna&oh=00_AfCxdMpzpJla964zBeKDiKuww_sPacLdmFvrp5x4FoPiTQ&oe=639EBB4E',
  },
  {
    clientName: 'Mrl 1',
    text: 'some random gibberissh that not actually that good enough as well',
    clientImage:
      'https://scontent.fktm9-2.fna.fbcdn.net/v/t39.30808-6/276297653_1175640276577179_6010080642725450089_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=iK_KuSm_cKkAX-iBG_H&_nc_ht=scontent.fktm9-2.fna&oh=00_AfCxdMpzpJla964zBeKDiKuww_sPacLdmFvrp5x4FoPiTQ&oe=639EBB4E',
  },
];

const Review = () => {
  return (
    <Element name="review" className="py-5">
      <SecHeading text="What our clients say ?" />
      <SecParagraph text="Below are the list of our successful clients." />
      <div className=" flex  w-[100%] md:w-[80%] mx-auto flex-wrap sm:py-5 md:py-10">
        {reviewDatas.map(review => (
          <ReviewCard
            key={useId()}
            clientName={review.clientName}
            clientImage={review.clientImage}
            text={review.text}
          />
        ))}
      </div>
    </Element>
  );
};

export default Review;
