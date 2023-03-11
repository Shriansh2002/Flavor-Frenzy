const HeroSection = () => {
	return (
		<div className="bg-gray-900 py-20 px-4 sm:px-6 lg:px-8">
			<div className="max-w-7xl mx-auto text-center">
				<h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
					Find Your Perfect Recipe
				</h1>
				<p className="mt-4 text-xl text-gray-300">
					Search thousands of recipes and discover new favorites.
				</p>
				<div className="mt-10 max-w-xs mx-auto sm:max-w-none sm:flex sm:justify-center">
					<div className="rounded-md shadow">
						<a
							href="#"
							className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-green-500 hover:bg-green-600 md:py-4 md:text-lg md:px-10"
						>
							Get Started
						</a>
					</div>
					<div className="mt-3 rounded-md shadow sm:mt-0 sm:ml-3">
						<a
							href="#"
							className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-green-500 bg-white hover:bg-gray-50 md:py-4 md:text-lg md:px-10"
						>
							Learn More
						</a>
					</div>
				</div>
			</div>
		</div>
	);
};

export default HeroSection;
