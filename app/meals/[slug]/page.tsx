import Link from 'next/link';

interface Params {
    slug: string;
}

interface MealDetailsPageProps {
    params: Params;
}

export default function MealDetailsPage({ params }: MealDetailsPageProps) {
    return (
        <main>
            <h1>Meal Page</h1>
            <p>Slug: ${params.slug}</p>
            <nav>
                <ul>
                    <li>
                        <Link href="/">Home</Link>
                    </li>
                </ul>
                <ul>
                    <li>
                        <Link href="/meals">Meals</Link>
                    </li>
                </ul>
            </nav>
        </main>
    );
}
