import Link from 'next/link';
import Image from 'next/image';
import MainHeaderBackground from '@/components/MainHeaderBackground/MainHeaderBackground';
import logoImg from '@/assets/logo.png';
import styles from './mainHeader.module.css';

export default function MainHeader() {
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
                            <Link href="/meals">Browse Meals</Link>
                        </li>
                        <li>
                            <Link href="/community">Community</Link>
                        </li>
                    </ul>
                </nav>
            </header>
        </>
    );
}
