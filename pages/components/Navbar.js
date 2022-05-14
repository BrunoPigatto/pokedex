import Link from "next/link";
import Image from "next/image";


export default function Navbar() {
    return(
        <nav>
            <div>
                <Image src="/images/pokeball.png" width="30" height="30" alt="PokeDex" />
                <h1>PokeDéx</h1>
            </div>
            <ul>
                <li>
                    <Link href="/">Home</Link>
                </li>
                <li>
                    <Link href="/">Sobre</Link>
                </li>
            </ul>
        </nav>
    )
}