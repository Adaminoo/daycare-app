import styles from '../stylesheets/home.module.css'
import { Link, Route, Routes } from 'react-router-dom'
import bg from '../assets/Kellys-Kare.png'
export default function Home() {
    

    return (
        <>
            <div className={styles.homeContainer} style={{backgroundImage: `url(${bg})`, }}>
                <div className={styles.top}>
                    <div className={styles.title}>KELLY'S KARE</div>
                    <div className={styles.subtitle}>FAMILY CARE CENTER</div>
                    <div className={styles.titleCaption}>DAYTIME CARE FOR AGES 18-36 MONTHS</div>
                </div>
                <div className={styles.center}>
                    <div className={styles.centerTitle}>COME TOUR OUR MONTESSORI-INSPIRED, HOMEY ENVIRONMENT</div>
                    <div>Tuesday - Friday</div>
                    <div>8am - 3pm</div>
                    <div>123 anywhere street</div>
                </div>
                <div className={styles.bottom}>
                    <Link to={"/bio"} className={styles.button}>Get to Know Us</Link>
                    <Link to={"/faq"} className={styles.button}>See our FAQs</Link>
                    <Link to={"/contact"} className={styles.button}>Contact Us</Link>
                </div>
            </div>
        </>
    )
}