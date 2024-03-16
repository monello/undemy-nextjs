'use client';

interface CustomError {
    message: string;
    // Add any additional properties you need
}

interface MealsErrorProps {
    error: CustomError;
}

export default function MealsError({ error }: MealsErrorProps) {
    return (
        <main className="error">
            <h1>An error occured!</h1>
            <p>Failed to load meals data. Please try again later</p>
            <p>{error.message}</p>
        </main>
    );
}
