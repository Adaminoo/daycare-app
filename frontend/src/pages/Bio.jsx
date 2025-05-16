import image from '../assets/360_F_248426448_NVKLywWqArG2ADUxDq6QprtIzsF82dMF.jpg'
import styles from '../stylesheets/bio.module.css'
import kellyPhoto from '../assets/drone.png'
export default function Bio() {
    return (
        <>

            <div className={styles.biographyContainer}>
                <div className={styles.bioTop}>
                    <h1>Curriculum & Philosophy</h1>
                    <div className={styles.bioContent}>
                        <img className={styles.topImage} src={image} />
                        <div className={styles.bioText}>
                            <p>At Kelly’s Kare, we believe toddlers thrive best in an environment that balances love with structure, and freedom with boundaries. Our approach is rooted in respect for each child’s development while also setting clear, consistent expectations that help them feel safe, confident, and ready to learn.</p>
                            <p>Our curriculum is play-based, backed by research, and developmentally appropriate — designed to meet children where they are while guiding them gently forward. We focus on hands-on experiences, real-world learning, and meaningful social interactions that build skills like emotional regulation, patience, communication, and empathy.</p>
                            <p>Rather than permissive parenting approaches that often leave toddlers overwhelmed and dysregulated, we offer gentle but firm guidance that empowers children to understand limits, express themselves appropriately, and form healthy relationships. We don’t believe in chaos disguised as freedom — we believe in intentional caregiving that honors the child and supports their growth with calm leadership.</p>
                            <p>Daily routines are predictable, transitions are handled with care, and children are encouraged to take pride in their independence while learning to be part of a community. Whether it’s learning to wait their turn, help a friend, or clean up after a project, every moment is an opportunity to grow.</p>
                            <p>If you’re looking for a care environment that’s nurturing and structured — one that builds character as much as it builds cognitive skills — you’ll find that here!</p>
                        </div>
                    </div>
                </div>
                <div className={styles.bioBottom}>
                    <h1>Meet the Provider - Kelly Blaylock</h1>
                    <div className={styles.bioContent}>
                        <img className={styles.bottomImage} src={kellyPhoto} />
                        <div className={styles.bioText}>
                            <p>Hi! I’m Kelly, founder of Kelly’s Kare and a passionate early childhood caregiver with over 8 years of hands-on experience as well as a college degree in Early Childhood Development. For most of my adult life, I’ve worked as a professional nanny and caregiver, specializing in toddlers and young children. This isn’t just a job to me, it’s my passion and calling.</p>
                            <p>Working closely with families over the years has given me deep insight into what children truly need to thrive: structure, predictability, respectful boundaries, and a whole lot of love. After years of planning and dreaming, I created this program to bring the high-quality, intentional care I’ve offered as a nanny to a small, individualized daycare setting, while striving to create a warm, personal, and affordable care option for families who need it most.</p>
                            <p>Through my experience, I have seen the importance of relationships, early social and emotional learning, and the value of strong, confident leadership during these foundational years. If you’re looking for a provider who takes toddler development seriously and truly loves what she does, you’re in the right place. I can’t wait to meet you and your little one!</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
        
    )
}