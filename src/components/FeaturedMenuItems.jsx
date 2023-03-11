import allItems from '../data/AllItems.json';
import MenuItemCard from './MenuItemCard';

const FeaturedMenuItems = () => {
	const featuredItems = allItems.filter((item) => item.name);

	return (
		<section className="py-12 bg-white">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<h2 className="text-3xl font-extrabold text-gray-900">
					Featured Menu Items
				</h2>
				<div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-8">
					{featuredItems.map((item) => (
						<MenuItemCard key={item.id} item={item} />
					))}
				</div>
			</div>
		</section>
	);
};

export default FeaturedMenuItems;
