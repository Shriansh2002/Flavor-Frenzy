import Head from 'next/head';

import Header from '@/components/global/header.jsx';
import FeaturedMenuItems from '@/components/FeaturedMenuItems.jsx';
import HeroSection from '@/components/HeroSection';
import Footer from '@/components/global/footer';

const HomePage = () => {

  return (
    <>
      <Head>
        <title>Menu - Flavor Frenzy</title>
      </Head>

      <Header />


      <main>
        <HeroSection />

        <FeaturedMenuItems />

      </main>

      <Footer />

    </>
  );
};

export default HomePage;
