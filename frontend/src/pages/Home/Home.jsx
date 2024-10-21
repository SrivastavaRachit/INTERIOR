import React, { useState } from 'react';

import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';
import Banner from '../../components/Banner/Banner';
import Whatwedo from '../../components/Whatwedo/Whatwedo'
import OurWork from '../../components/OurWork/OurWork';
import Projects from '../../components/Projects/Projects';
import MeetOurClients from '../../components/MeetOurClients/MeetOurClients';


const Home = () => {
  return (
    <>
      {/* Navbar */}
      <div>
        <Navbar />
      </div>

      {/* Banner Section */}
      <Banner />

      {/* What We Do Section */}
      <Whatwedo />

      {/* Our Latest Projects Section */}
      <Projects />

      {/* Our Work Section */}
      <OurWork />

      {/* Our Work Section */}
      <MeetOurClients />


      {/* Footer */}
      <div>
        <Footer />
      </div>
    </>
  );
};

export default Home;
