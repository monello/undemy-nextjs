import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import MainHeaderBackground from '@/components/MainHeaderBackground/MainHeaderBackground';
import logoImg from '@/assets/logo.png';
import styles from './mainHeader.module.css';

export default function MainHeader() {
    const path = usePathname();

    return (
        <>
            <MainHeaderBackground />
            <header className={styles.header}>
                <Link className={styles.logo} href="/">
                    <Image src={logoImg} alt="A plate of food" priority />
                    NextLevel Food
                </Link>

                <nav className={styles.nav}>
                    <ul>
                        <li>
                            <Link
                                href="/meals"
                                className={
                                    path.startsWith('/meals')
                                        ? styles.active
                                        : undefined
                                }
                            >
                                Browse Meals
                            </Link>
                        </li>
                        <li>
                            <Link
                                href="/community"
                                className={
                                    path === '/community'
                                        ? styles.active
                                        : undefined
                                }
                            >
                                Community
                            </Link>
                        </li>
                    </ul>
                </nav>
            </header>
        </>
    );
}
