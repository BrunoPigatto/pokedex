import Link from "next/link";
import Image from "next/image";

import styles from '../styles/Navbar.module.css'


export default function Navbar() {
    return(
        <nav className={styles.navbar}>
            <div className={styles.logo}>
                <Link href="/">
                    <div>
                        <Image src="/images/pokeball.png" width="30" height="30" alt="PokeDex" />
                        <h1>PokeDéx</h1>
                    </div>
                </Link>

            </div>
            <ul className={styles.link_items}>
                <li>
                    <Link href="/">Home</Link>
                </li>
                <li>
                    <Link href="/about">Sobre</Link>
                </li>
            </ul>
        </nav>
    )
}