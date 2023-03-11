const MenuItemCard = ({ item }) => {
	const { name, description, ingredients, price, image, category } = item;

	return (
		<div className="bg-white shadow-lg rounded-xl overflow-hidden flex flex-col hover:shadow-2xl transition-all duration-300 ease-in-out transform hover:-translate-y-1">
			<div className="relative h-48">
				<img
					className={`absolute w-full h-full object-cover object-center transition-all duration-300 ease-in-out transform `}
					src={image}
					alt={name}
				/>
				<div className="absolute inset-0 bg-black opacity-30"></div>
				<div className="absolute inset-0 flex items-center justify-center">
					<h2 className="text-white font-bold text-3xl text-center">
						{name} {''}
						{category.charAt(0).toUpperCase() + category.slice(1)}
					</h2>
				</div>
			</div>
			<div className="py-4 px-6">
				<div className="flex justify-between items-center mb-4">
					<p className="text-gray-700 font-bold text-lg">${price}</p>
					<button className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded-full">
						View Details
					</button>
				</div>
				<p className="text-gray-700 text-lg mb-4">
					{description || 'Description Not Provided'}
				</p>
				<ul className="text-gray-700 mb-4">
					<p className="font-bold">Ingredients:</p>
					<p>{ingredients.join(' • ')}</p>
				</ul>
			</div>
		</div>
	);
};

export default MenuItemCard;
