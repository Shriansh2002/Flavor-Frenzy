import { FaFire, FaLeaf } from 'react-icons/fa';

const RecipePage = ({ id }) => {
	const recipe = {
		name: 'Margherita',
		description:
			'Margherita pizza is a simple pizza made with mozzarella, tomatoes, and basil.',
		category: 'pizza',
		ingredients: ['tomato sauce', 'mozzarella'],
		spicy: false,
		vegetarian: true,
		price: 17.0,
		image: 'https://i.imgur.com/8B8YLOo.jpg',
		ingredients: [
			'6-8 ripe tomatoes, diced',
			'1 onion, chopped',
			'4 cloves garlic, minced',
			'1/4 cup olive oil',
			'1 tsp dried basil',
			'1 tsp dried oregano',
			'4 cups chicken or vegetable broth',
			'Salt and pepper to taste',
		],
		instructions: [
			'Heat the olive oil in a large pot over medium heat. Add the onion and garlic and cook until the onion is translucent.',
			'Add the diced tomatoes and cook for 5-7 minutes, until the tomatoes start to break down.',
			'Stir in the basil and oregano, then add the broth.',
			'Bring to a simmer and let cook for 15-20 minutes.',
			'Use an immersion blender to blend the soup until smooth, or transfer to a blender and blend in batches.',
			'Season with salt and pepper to taste.',
			'Serve hot with crusty bread.',
		],
	};

	return (
		<>
			<div className="mx-auto px-4 sm:px-6 lg:px-8 py-8">
				<h2 className="text-2xl text-center py-4 font-bold">
					{recipe.name.toUpperCase()} {recipe.category.toUpperCase()}
				</h2>
				<div className="flex flex-col lg:flex-row justify-between items-center">
					<div className="w-full lg:w-1/2 lg:pr-6">
						<img
							className="rounded-lg p-32"
							src={recipe.image}
							alt={recipe.name}
						/>
					</div>
					<div className="w-full lg:w-1/2 mt-6 lg:mt-0">
						<div className="flex items-center text-lg mt-2">
							<span className="text-gray-700 mr-2">
								{recipe.category.charAt(0).toUpperCase() +
									recipe.category.slice(1)}
							</span>
							{recipe.spicy && (
								<span
									className="text-red-600 mr-2"
									title="Spicy"
								>
									<FaFire />
								</span>
							)}
							{recipe.vegetarian && (
								<span
									className="text-green-600"
									title="Vegetarian"
								>
									<FaLeaf />
								</span>
							)}
						</div>
						<div className="mt-4">
							<p className="text-gray-700 text-lg">
								{recipe.description}
							</p>
						</div>
						<div className="mt-8">
							<h3 className="text-lg font-bold mb-4">
								Ingredients:
							</h3>
							<ul className="list-disc pl-6">
								{recipe.ingredients.map((ingredient) => (
									<li
										className="text-gray-700"
										key={ingredient}
									>
										{ingredient}
									</li>
								))}
							</ul>
						</div>
						<div className="mt-8">
							<h3 className="text-lg font-bold mb-4">
								Instructions:
							</h3>
							<ol className="list-decimal pl-6">
								{recipe.instructions.map((step) => (
									<li className="text-gray-700" key={step}>
										{step}
									</li>
								))}
							</ol>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default RecipePage;
