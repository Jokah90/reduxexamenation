import leavestop from '../assets/svg/graphics-header.svg'
import styles from '../styles/LeafStyling.module.css'




const Header = () => {
    return (
        <section>
            <img src={leavestop} alt='Header leaves' className={styles.gridItemHeader} />
        </section>
    );
}

export default Header;