import React, { useId } from 'react';
import ReviewCard from '../../cards/ReviewCard';
import SecHeading from '../../heading/SecHeading';
import SecParagraph from '../../paragraph/SecParagraph';
import { Element } from 'react-scroll';

const reviewDatas = [
  {
    clientName: 'sujan bhattrai',
    text: 'test comment',
    clientImage:
      'https://scontent.fktm9-2.fna.fbcdn.net/v/t39.30808-6/276297653_1175640276577179_6010080642725450089_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=iK_KuSm_cKkAX-iBG_H&_nc_ht=scontent.fktm9-2.fna&oh=00_AfCxdMpzpJla964zBeKDiKuww_sPacLdmFvrp5x4FoPiTQ&oe=639EBB4E',
  },
  {
    clientName: 'Aishma Poudel',
    text: 'test comment',
    clientImage:
      'https://scontent.fktm9-2.fna.fbcdn.net/v/t39.30808-6/276297653_1175640276577179_6010080642725450089_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=iK_KuSm_cKkAX-iBG_H&_nc_ht=scontent.fktm9-2.fna&oh=00_AfCxdMpzpJla964zBeKDiKuww_sPacLdmFvrp5x4FoPiTQ&oe=639EBB4E',
  },
  {
    clientName: 'Rahul dotel',
    text: 'test comment',
    clientImage:
      'https://scontent.fktm9-2.fna.fbcdn.net/v/t39.30808-6/276297653_1175640276577179_6010080642725450089_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=iK_KuSm_cKkAX-iBG_H&_nc_ht=scontent.fktm9-2.fna&oh=00_AfCxdMpzpJla964zBeKDiKuww_sPacLdmFvrp5x4FoPiTQ&oe=639EBB4E',
  },
  {
    clientName: 'Subash tamang',
    text: 'test comment',
    clientImage:
      'https://scontent.fktm9-2.fna.fbcdn.net/v/t39.30808-6/276297653_1175640276577179_6010080642725450089_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=iK_KuSm_cKkAX-iBG_H&_nc_ht=scontent.fktm9-2.fna&oh=00_AfCxdMpzpJla964zBeKDiKuww_sPacLdmFvrp5x4FoPiTQ&oe=639EBB4E',
  },
  {
    clientName: 'Smaran sapkota',
    text: 'test comment',
    clientImage:
      'https://scontent.fktm9-2.fna.fbcdn.net/v/t39.30808-6/276297653_1175640276577179_6010080642725450089_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=iK_KuSm_cKkAX-iBG_H&_nc_ht=scontent.fktm9-2.fna&oh=00_AfCxdMpzpJla964zBeKDiKuww_sPacLdmFvrp5x4FoPiTQ&oe=639EBB4E',
  },
  {
    clientName: 'Saksham khadayat',
    text: 'test comment',
    clientImage:
      'https://scontent.fktm9-2.fna.fbcdn.net/v/t39.30808-6/276297653_1175640276577179_6010080642725450089_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=iK_KuSm_cKkAX-iBG_H&_nc_ht=scontent.fktm9-2.fna&oh=00_AfCxdMpzpJla964zBeKDiKuww_sPacLdmFvrp5x4FoPiTQ&oe=639EBB4E',
  },
];

const Review = () => {
  return (
    <Element name="review" className="py-5">
      <SecHeading text="What our clients say ?" />
      <SecParagraph text="Below are the lists of our happy and successful clients who trusted us." />
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
