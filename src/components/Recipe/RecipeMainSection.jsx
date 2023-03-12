import { FaFire } from 'react-icons/fa';
import { IoMdLeaf } from 'react-icons/io';
import { GiMeat } from 'react-icons/gi';

const RecipePage = ({ recipe }) => {
	console.log(recipe);
	return (
		<>
			{recipe?.name && (
				<div className="mx-auto px-4 sm:px-6 lg:px-8 py-8 w-screen">
					<h2 className="text-2xl text-center py-4 font-bold">
						{recipe.name.toUpperCase()}{' '}
						{recipe.category.toUpperCase()}
					</h2>
					<div className="flex flex-col lg:flex-row ">
						<div className="w-full lg:w-1/2 lg:pr-6">
							<img
								className="rounded-lg p-32"
								src={recipe.image}
								alt={recipe.name}
							/>
						</div>
						<div className="w-full lg:w-1/2 mt-6 lg:mt-0">
							<div className="flex items-center text-lg mt-2">
								<span className="text-gray-700 mr-2 font-bold">
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
								{recipe.vegetarian ? (
									<span
										className="text-green-600"
										title="Vegetarian"
									>
										<IoMdLeaf className="w-6 h-6" />
									</span>
								) : (
									<span
										className="text-red-600"
										title="Non-Vegetarian"
									>
										<GiMeat className="w-6 h-6" />
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
									{recipe?.instructions?.map((step) => (
										<li
											className="text-gray-700"
											key={step}
										>
											{step}
										</li>
									))}
								</ol>
							</div>
						</div>
					</div>
				</div>
			)}
		</>
	);
};

export default RecipePage;
