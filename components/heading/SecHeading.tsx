import React from 'react';

const SecHeading = ({ text }: { text: string }) => {
  return (
    <h1 className="my-10 bg-clip-text text-transparent text-center font-lato900 text-2xl md:text-4xl  bg-gradient-to-br from-[#20bf55] to-[#01baef]">
      {text}
    </h1>
  );
};

export default SecHeading;
