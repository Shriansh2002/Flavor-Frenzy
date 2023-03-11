// Next
import { useRouter } from 'next/router';
import Head from 'next/head';

// Components
import { Footer, Header, RecipeMainSection } from '@/components';

const Recipepage = () => {
    const router = useRouter();
    const { id } = router.query;

    return (
        <>
            <Head>
                <title>Recipe - Flavor Frenzy</title>
            </Head>

            <main className='flex flex-col min-h-screen justify-between'>
                <Header />

                <RecipeMainSection id={id} />

                <Footer />
            </main>
        </>
    );
};

export default Recipepage;