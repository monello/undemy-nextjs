import { Meal } from '@/components/Meals/types';
import sql, { Statement } from 'better-sqlite3';

const db = sql('meals.db');

export async function getMeals() {
  await new Promise((resolve) => setTimeout(resolve, 2000));
  throw new Error('Loading meals failed');
  try {
    const stmt: Statement<Meal[]> = db.prepare('SELECT * FROM meals');
    const meals: Meal[] = stmt.all() as Meal[]; // Type assertion
    return meals;
  } catch (error) {
    console.error('Error fetching meals:', error);
    throw new Error('Failed to fetch meals');
  }
}
