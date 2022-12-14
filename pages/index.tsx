import React from 'react';
import Head from 'next/head';
import {
  HomeSection,
  ServiceSection,
  TeamSection,
  ReviewSection,
  ContactSection,
} from '../components/sections';
import NavBar from '../components/NavBar';
import BottomNav from '../components/NavBar/BottomNav';

const Home = () => {
  return (
    <div className="  max-w-[1400px] mx-auto px-2 md:px-10 ">
      <Head>
        <title>Code Station | crafting ideas</title>
        <link rel="icon" href="/assets/logo/logo.png" />
      </Head>
      <NavBar />
      <BottomNav />
      <HomeSection />
      <ServiceSection />
      <TeamSection />
      <ReviewSection />
      <ContactSection />
    </div>
  );
};

export default Home;
