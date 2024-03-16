import sql, { Statement } from 'better-sqlite3';
import { Meal } from '@/components/Meals/types';

const db = sql('meals.db');

export async function getMeals() {
  await new Promise((resolve) => setTimeout(resolve, 2000));
  try {
    const stmt: Statement<Meal[]> = db.prepare('SELECT * FROM meals');
    const meals = stmt.all() as Meal[]; // Type assertion
    return meals;
  } catch (error) {
    console.error('Error fetching meals:', error);
    throw new Error('Failed to fetch meals');
  }
}

export function getMeal(slug: string) {
  return db.prepare('SELECT * FROM meals WHERE slug = ?').get(slug) as Meal;
}
