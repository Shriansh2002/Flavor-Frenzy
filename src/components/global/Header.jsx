import Link from 'next/link';

const Header = () => {
	return (
		<header className="bg-white shadow">
			<div className="max-w-7xl mx-auto py-4 px-4 sm:px-6 lg:px-8 flex items-center justify-between">
				<Link href="/">
					<h1 className="text-2xl font-bold text-gray-900 cursor-pointer">
						Flavor Frenzy
					</h1>
				</Link>
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
	);
};

export default Header;
