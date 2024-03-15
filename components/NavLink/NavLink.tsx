'use client';

import { usePathname } from 'next/navigation';
import Link from 'next/link';

import styles from './navLink.module.css';

interface NavLinkProps {
    href: string;
    children: React.ReactNode;
}

export default function NavLink({ href, children }: NavLinkProps) {
    const path = usePathname();

    return (
        <Link
            href={href}
            className={
                path.startsWith(href)
                    ? `${styles.link} ${styles.active}`
                    : styles.link
            }
        >
            {children}
        </Link>
    );
}
