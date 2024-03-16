import Link from 'next/link';
import MealsGrid from '@/components/Meals/MealsGrid/MealsGrid';
import { getMeals } from '@/lib/meals';
import styles from './page.module.css';

export default function MealsPage() {
    const meals = getMeals();

    return (
        <>
            <header className={styles.header}>
                <h1>
                    Delicious meals, created{' '}
                    <span className={styles.highlight}>by you</span>
                </h1>
                <p>
                    Choose your favorite recipe and cook it yourself. It is easy
                    and fun!
                </p>
                <p className={styles.cta}>
                    <Link href="/meals/share">Share Your Favorite Recipe</Link>
                </p>
            </header>
            <main className={styles.main}>
                <MealsGrid meals={meals} />
            </main>
        </>
    );
}
