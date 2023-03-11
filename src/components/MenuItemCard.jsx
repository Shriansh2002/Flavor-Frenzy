const MenuItemCard = ({ item }) => {
	const { name, description, ingredients, price, image } = item;

	return (
		<div className="bg-white shadow-lg rounded-lg overflow-hidden">
			<img
				className="w-full h-48 object-cover object-center"
				src={image}
				alt={name}
			/>
			<div className="py-4 px-6">
				<h2 className="text-gray-900 font-bold text-2xl mb-2">
					{name}
				</h2>
				<p className="text-gray-700 text-lg mb-4">{description}</p>
				<ul className="text-gray-700 mb-4">
					{ingredients.map((ingredient) => (
						<li key={ingredient}>{ingredient}</li>
					))}
				</ul>
				<p className="text-gray-700 font-bold text-lg mb-4">${price}</p>
				<button className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded-full">
					Order Now
				</button>
			</div>
		</div>
	);
};
export default MenuItemCard;
