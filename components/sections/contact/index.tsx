import React, { useId } from 'react';
import SecHeading from '../../heading/SecHeading';
import SecParagraph from '../../paragraph/SecParagraph';
import LottieContainer from '../../lottieContainer/LottieContainer';
import ContactAnimation from '../../lottieanimation/contact.json';
import ContactCard from '../../cards/ContactCard';
import { IoLogoFacebook, IoPhonePortrait, IoMail } from 'react-icons/io5';

const contactList = [
  {
    contactName: 'Facebook',
    contactLink: 'https://www.facebook.com/codestationnepal',
    icon: IoLogoFacebook,
  },
  {
    contactName: 'Phone',
    contactLink: 'tel:9847346562',
    icon: IoPhonePortrait,
  },
  {
    contactName: 'Mail',
    contactLink: 'mailto:codestation.mail@gmail.com',
    icon: IoMail,
  },
];

const Contact = () => {
  return (
    <div id="contact">
      <SecHeading text="How to contact us ?" />
      <LottieContainer animationData={ContactAnimation} />
      <SecParagraph text="You can contact us via email, phone our through facebook page." />
      <SecParagraph text="click on the below cards to contact us." />
      <div className="py-10">
        {contactList.map(contact => (
          <ContactCard
            key={useId()}
            contactLink={contact.contactLink}
            contactName={contact.contactName}
            Icon={contact.icon}
          />
        ))}
      </div>
    </div>
  );
};

export default Contact;
