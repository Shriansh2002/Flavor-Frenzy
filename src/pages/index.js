import Head from 'next/head';

import {
  Header,
  HeroSection,
  FeaturedMenuItems,
  Footer
} from '@/components';

const HomePage = () => {

  return (
    <>
      <Head>
        <title>Menu - Flavor Frenzy</title>
      </Head>

      <main className='flex flex-col min-h-screen justify-between'>

        <Header />

        <HeroSection />

        <FeaturedMenuItems />

        <Footer />

      </main>
    </>
  );
};

export default HomePage;
