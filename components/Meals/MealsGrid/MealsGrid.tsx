import { Meal } from '../types';
import MealItem from '../MealItem/MealItem';

import styles from './mealsGrid.module.css';

interface MealsGridProps {
    meals: Meal[];
}

export default function MealsGrid({ meals }: MealsGridProps) {
    return (
        <ul className={styles.meals}>
            {meals.map((meal) => (
                <li key={meal.id}>
                    <MealItem {...meal} />
                </li>
            ))}
        </ul>
    );
}
