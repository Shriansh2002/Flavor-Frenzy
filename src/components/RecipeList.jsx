import Link from 'next/link';

const RecipeList = ({ recipes }) => {
	return (
		<div className="flex flex-wrap justify-center">
			{recipes.map((recipe) => (
				<div className="max-w-xs mx-4 my-8 rounded overflow-hidden shadow-lg">
					<Link href={`/recipes/${recipe.id}`}>
						<img
							className="w-full h-48 object-cover"
							src={recipe.image}
							alt={recipe.name}
						/>
						<div className="px-6 py-4">
							<div className="font-bold text-xl mb-2">
								{recipe.name}
							</div>
							<p className="text-gray-700 text-base">
								{recipe.description}
							</p>
						</div>
					</Link>
				</div>
			))}
		</div>
	);
};

export default RecipeList;
