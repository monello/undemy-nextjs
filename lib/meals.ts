import fs from 'node:fs';
import sql, { Statement } from 'better-sqlite3';
import slugify from 'slugify';
import xss from 'xss';

import { Meal, MealFormData } from '@/components/Meals/types';

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

export async function saveMeal(meal: MealFormData) {
  meal.slug = slugify(meal.title, { lower: true });
  meal.instructions = xss(meal.instructions);

  const imgExtension = meal.image.name.split('.').pop();
  const imgFilename = `${meal.slug}.${imgExtension}`;
  const imgBuffer = await meal.image.arrayBuffer();
  const stream = fs.createWriteStream(`public/images/${imgFilename}`);
  stream.write(Buffer.from(imgBuffer), (error) => {
    if (error) {
      throw new Error('Saving image failed');
    }
  });
  meal.image_src = `/images/${imgFilename}`;

  db.prepare(`
  INSERT INTO meals
    (title, summary, instructions, creator, creator_email, image_src, slug)
  VALUES (
    @title,
    @summary,
    @instructions,
    @creator,
    @creator_email,
    @image_src,
    @slug
  )
  `).run(meal);
}
