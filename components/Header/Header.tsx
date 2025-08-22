
import css from './Header.module.css';
import Link from 'next/link';


export default function Header() {
    return (
        <header className={css.header}>
            <Link href="/" aria-label="Home">
                NoteHub
            </Link>
            <nav aria-label="Main Navigation">
                <ul className={css.navigation}>
                    <li>
                        <Link href="/">Home</Link>
                    </li>
                    <li>
                        <Link href="/Notes">Notes</Link>
                    </li>
                    <li>
                        <Link href='/Profile'>Profile</Link>
                    </li>
                    <li>
                        <Link href='/About'>About</Link>
                    </li>
                </ul>
            </nav>
        </header>

    )
}


