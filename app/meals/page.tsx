import Link from 'next/link';

export default function MealsPage() {
    return (
        <main>
            <h1>Meals Page</h1>
            <nav>
                <ul>
                    <li>
                        <Link href="/">Home</Link>
                    </li>
                    <li>
                        <Link href="/meals/share">Meals Share</Link>
                    </li>
                    <li>
                        <Link href="/meals/meal-1">Meal 1</Link>
                    </li>
                    <li>
                        <Link href="/meals/meal-2">Meal 2</Link>
                    </li>
                </ul>
            </nav>
        </main>
    );
}
