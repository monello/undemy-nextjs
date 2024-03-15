import type { Metadata } from 'next';
import MainHeader from '@/components/MainHeader/MainHeader';

import './globals.css';

export const metadata: Metadata = {
    title: 'NextLevel Food',
    description: 'Delicious meals, shared by a food-loving community.',
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body>
                <MainHeader />
                {children}
            </body>
        </html>
    );
}
