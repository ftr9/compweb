import React, { useId } from 'react';
import ReviewCard from '../../cards/ReviewCard';
import SecHeading from '../../heading/SecHeading';
import SecParagraph from '../../paragraph/SecParagraph';
import { Element } from 'react-scroll';

const reviewDatas = [
  {
    clientName: 'MRL gameshop',
    text: 'CodeStation  provided excellent service. The team was knowledgeable and efficient, and they quickly solved all of our issues. Highly recommend.',
    clientUrl: 'https://www.facebook.com/mrlgameshopnp',
    clientImage:
      'https://scontent.fktm9-2.fna.fbcdn.net/v/t39.30808-6/276297653_1175640276577179_6010080642725450089_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=sK52y-DWYf8AX8a_CRW&_nc_ht=scontent.fktm9-2.fna&oh=00_AfCZLNktGVYPjm2pi40w1qB_B1_C4fsOon5b1xelE5vWaQ&oe=63A4AA0E',
  },
  {
    clientName: 'SUB gaming',
    text: 'Working with Code Station  was a great experience. The team was professional and responsive, and they exceeded our expectations.',
    clientUrl: 'https://www.facebook.com/SastoucBaajar',
    clientImage:
      'https://scontent.fktm9-2.fna.fbcdn.net/v/t1.6435-9/135569990_195530975590318_8033916111137778164_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=WIMoPRb-8toAX8w4QAI&_nc_oc=AQkVN8aHHqc0lGUMBHzG_cuBoz2aYugGryuqZCGUJIBagQtCiMoBdaczRiPldAHzab1sXs5uXq5aH-rzc1ZhdV2J&_nc_ht=scontent.fktm9-2.fna&oh=00_AfDMalc79wchE6Bgj2bgYyyVncTFftZQxwGPKezejueqnw&oe=63C6376B',
  },
  {
    clientName: 'झिल्ल्के MO:MO',
    text: 'We were extremely satisfied with the service from CodeStation . The team was knowledgeable and helpful, and they provided top-notch customer service.',
    clientUrl:
      'https://www.facebook.com/profile.php?id=100087455794618&mibextid=ZbWKwL',
    clientImage:
      'https://scontent.fktm9-2.fna.fbcdn.net/v/t39.30808-6/315645375_112381261687067_9087151714148373171_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=LXbedoFc35YAX8eHQPb&tn=uFVSs4YZr4UI5OEF&_nc_ht=scontent.fktm9-2.fna&oh=00_AfDE4NI6oSFnQGXvXvR_3eBl8-YiGax9xaNDJdYy7MxOGA&oe=63A3C4F1',
  },
  {
    clientName: 'Valley Momos Delivery',
    text: 'CodeStation  did an excellent job with our technology needs. The team was efficient and thorough, and we would definitely work with them again.',
    clientUrl: 'https://www.facebook.com/valleymomosD',
    clientImage:
      'https://scontent.fktm9-2.fna.fbcdn.net/v/t39.30808-6/299544849_174834041776309_1899061998147311356_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=eeD65W84baIAX-ZU6od&_nc_ht=scontent.fktm9-2.fna&oh=00_AfDh0hO4WMebemoN4B8VkCBb4mOal3fgHhns8Q9upDVQSA&oe=63A44A45',
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
            clientLink={review.clientUrl}
            text={review.text}
          />
        ))}
      </div>
    </Element>
  );
};

export default Review;
