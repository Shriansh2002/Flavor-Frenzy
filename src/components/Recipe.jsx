import { useRouter } from 'next/router';

const Recipe = ({ recipe }) => {
	const router = useRouter();

	if (router.isFallback) {
		return <div>Loading...</div>;
	}

	return (
		<div>
			<h1 className="text-3xl font-bold mb-4">{recipe.name}</h1>
			<img
				className="w-full h-96 object-cover mb-4"
				src={recipe.image}
				alt={recipe.name}
			/>
			<div className="flex justify-between mb-4">
				<span className="text-gray-700 font-bold">Price:</span>
				<span className="text-gray-700">{recipe.price}</span>
			</div>
			<div className="mb-4">
				<h2 className="text-xl font-bold mb-2">Ingredients:</h2>
				<ul className="list-disc list-inside">
					{recipe.ingredients.map((ingredient) => (
						<li key={ingredient} className="text-gray-700">
							{ingredient}
						</li>
					))}
				</ul>
			</div>
			<div>
				<h2 className="text-xl font-bold mb-2">Instructions:</h2>
				<p className="text-gray-700">{recipe.instructions}</p>
			</div>
		</div>
	);
};

export default Recipe;
