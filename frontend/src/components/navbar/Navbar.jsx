import { Link } from "react-router-dom"
import styles from "./navbar.module.css"

export default function Navbar() {

    return (
        <>
            <div className={styles.navContainer}>
                <div className={styles.navTitle}>Kelly's Kare</div>
                <div className={styles.navLinks}>
                    <Link className={styles.navLink} to={'/'}>Home</Link>
                    <Link className={styles.navLink} to={'/faq'}>FAQs</Link>
                    <Link className={styles.navLink} to={'/contact'}>Contact</Link>
                </div>
            </div>

        </>
    )
}