import styles from '../stylesheets/home.module.css'

export default function Home() {
    

    return (
        <>
            {/* <svg id='test' width="300" height="300" viewBox="0 0 300 300">
                <defs>
                    <path id="curve" d="M 50,150 A 80, 50 0 1,1 250,150" fill="transparent" />
                </defs>
                <text className={styles.title}>
                    <textPath href="#curve" startOffset="50%" textAnchor="middle">
                    Kelly's Kare
                    </textPath>
                </text>
            </svg> */}
            <div className={styles.top}>
                <div className={styles.title}>Kelly's Kare</div>
                <div className={styles.subtitle}>Family Care Center</div>
                <div className={styles.titleCaption}>DAYCARE FOR AGES 18-36 MONTHS</div>
            </div>
            <div className={styles.center}>
                <div>COME TOUR OUR MONTESSORI-INSPIRED, HOMEY ENVIRONMENT</div>
                <div>Tuesday - Friday</div>
                <div>8am - 3pm</div>
                <div>123 anywhere street</div>
            </div>
            <div className={styles.bottom}>
                <button className={styles.button}>See our Facility</button>
                <button className={styles.button}>Contact Us</button>
                <button className={styles.button}>Meet Kelly</button>
                <button className={styles.button}>See our FAQs</button>
            </div>
            
            
        </>
    )
}