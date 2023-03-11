import Head from 'next/head';
import FeaturedMenuItems from '../components/FeaturedMenuItems.jsx';

const HomePage = () => {

  return (
    <>
      <Head>
        <title>Menu - Pizza, Pasta, Salads, Dessert, Drinks, Sauces, Sides</title>
      </Head>

      <header className="bg-white shadow">
        <div className="max-w-7xl mx-auto py-4 px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          <h1 className="text-2xl font-bold text-gray-900">Pizza Restaurant</h1>
          <nav className="space-x-4">
            <a
              href="#"
              className="text-gray-500 hover:text-gray-700 font-medium"
            >
              Menu
            </a>
            <a
              href="#"
              className="text-gray-500 hover:text-gray-700 font-medium"
            >
              About Us
            </a>
            <a
              href="#"
              className="text-gray-500 hover:text-gray-700 font-medium"
            >
              Contact Us
            </a>
          </nav>
        </div>
      </header>

      <main>
        <div className="bg-gray-50">
          <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
                Delicious Pizza
              </h2>
              <p className="mt-4 text-lg text-gray-500">
                Order now and get your pizza delivered to your doorstep!
              </p>
              <a
                href="#"
                className="mt-8 inline-block w-full md:w-auto px-6 py-3 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-green-500 hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 sm:text-lg"
              >
                Order Now
              </a>
            </div>
          </div>
        </div>

        <FeaturedMenuItems />

      </main>

    </>
  );
};

export default HomePage;
