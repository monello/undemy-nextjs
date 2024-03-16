import Link from 'next/link';
import Image from 'next/image';
import { Meal } from '../types';

import classes from './mealItem.module.css';

export default function MealItem({
    title,
    slug,
    image_src,
    summary,
    creator,
}: Meal) {
    return (
        <article className={classes.meal}>
            <header>
                <div className={classes.image}>
                    <Image src={image_src} alt={title} fill />
                </div>
                <div className={classes.headerText}>
                    <h2>{title}</h2>
                    <p>by {creator}</p>
                </div>
            </header>
            <div className={classes.content}>
                <p className={classes.summary}>{summary}</p>
                <div className={classes.actions}>
                    <Link href={`/meals/${slug}`}>View Details</Link>
                </div>
            </div>
        </article>
    );
}
