export interface Meal {
  id: string;
  title: string;
  slug: string;
  image_src: string;
  summary: string;
  instructions: string;
  creator: string;
  creator_email: string;
}

export interface MealFormData {
  title: string;
  slug?: string;
  summary: string;
  instructions: string;
  image: File;
  image_src?: string;
  creator: string;
  creator_email: string;
}
