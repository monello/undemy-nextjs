import Link from 'next/link';
import Image from 'next/image';

import MainHeaderBackground from '@/components/MainHeaderBackground/MainHeaderBackground';
import logoImg from '@/assets/logo.png';
import styles from './mainHeader.module.css';
import NavLink from '../NavLink/NavLink';

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
                            <NavLink href="/meals">Browse Meals</NavLink>
                        </li>
                        <li>
                            <NavLink href="/community">
                                Foodies Community
                            </NavLink>
                            {/* <Link
                                href="/community"
                                className={
                                    path === '/community'
                                        ? styles.active
                                        : undefined
                                }
                            >
                                Community
                            </Link> */}
                        </li>
                    </ul>
                </nav>
            </header>
        </>
    );
}
