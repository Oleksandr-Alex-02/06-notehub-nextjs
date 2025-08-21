
import css from './Footer.module.css'

export default function Footer() {
    return (
        <footer className={css.footer}>
            <div className={css.content}>
                <p>© {new Date().getFullYear()} NoteHub. All rights reserved.</p>
                <div className={css.wrap}>
                    <p>Developer: Oleksandr</p>
                    <p>
                        Contact us:
                        <a href="https://github.com/goitacademy/react-notehub-styles/tree/hw-06/styles">student@notehub.app</a>
                    </p>
                </div>
            </div>
        </footer>

    )
}