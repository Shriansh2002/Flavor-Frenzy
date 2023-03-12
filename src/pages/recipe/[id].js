// Next
import { useRouter } from 'next/router';
import Head from 'next/head';

// Components
import { Footer, Header, RecipeMainSection } from '@/components';

// JSON DATA
import allRecipes from '@/data/AllItems.json';
import { useEffect, useState } from 'react';

const Recipepage = () => {
    const router = useRouter();
    const { id } = router.query;
    const [recipe, setRecipe] = useState({});

    useEffect(() => {
        let res = allRecipes.find((recipe) => recipe._id == id);
        setRecipe(res);
    }, [id]);

    return (
        <>
            <Head>
                <title>Recipe - Flavor Frenzy</title>
            </Head>

            <main className='flex flex-col min-h-screen justify-between'>
                <Header />

                <RecipeMainSection recipe={recipe} />

                <Footer />
            </main>
        </>
    );
};

export default Recipepage;