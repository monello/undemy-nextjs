import Image from 'next/image';
import { getMeal } from '@/lib/meals';
import styles from './page.module.css';
import { notFound } from 'next/navigation';

interface Params {
    slug: string;
}

interface MealDetailsPageProps {
    params: Params;
}

export default function MealDetailsPage({ params }: MealDetailsPageProps) {
    const meal = getMeal(params.slug);

    if (!meal) {
        notFound();
    }

    meal.instructions = meal.instructions.replace(/\n/g, '<br />');

    return (
        <>
            <header className={styles.header}>
                <div className={styles.image}>
                    <Image src={meal.image_src} alt={meal.title} fill />
                </div>
                <div className={styles.headerText}>
                    <h1>{meal.title}</h1>
                    <p className={styles.creator}>
                        by{' '}
                        <a href={`mailto:${meal.creator_email}`}>
                            {meal.creator}
                        </a>
                    </p>
                    <p className={styles.summary}>{meal.summary}</p>
                </div>
            </header>
            <main>
                <p
                    className={styles.instructions}
                    dangerouslySetInnerHTML={{
                        __html: meal.instructions,
                    }}
                ></p>
            </main>
        </>
    );
}
