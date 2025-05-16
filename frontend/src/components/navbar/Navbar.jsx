import { Link } from "react-router-dom"
import styles from "./navbar.module.css"
import { useState } from "react"
import icon from "../../assets/menu_24dp_E3E3E3_FILL0_wght400_GRAD0_opsz24.png"
import menuIcon from "../../assets/menu_24dp_000000_FILL0_wght400_GRAD0_opsz24.png"
export default function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    }

    return (
        <>
            <div className={styles.navContainer}>
                <div className={styles.navTitle}>Kelly's Kare</div>
                <button className={styles.menuButton} onClick={toggleMenu}>
                    <span
                        id={styles.menuButton} 
                        className="material-symbols-outlined"
                        style={{fontSize: '40px'}}>
                        menu
                    </span>
                </button>
                <div className={`${styles.navLinks} ${menuOpen ? styles.showMenu : ""}`}>
                    <Link className={styles.navLink} to="/" onClick={() => setMenuOpen(false)}>Home</Link>
                    <Link className={styles.navLink} to="/faq" onClick={() => setMenuOpen(false)}>FAQs</Link>
                    <Link className={styles.navLink} to="/contact" onClick={() => setMenuOpen(false)}>Contact</Link>
                </div>
            </div>

        </>
    )
}