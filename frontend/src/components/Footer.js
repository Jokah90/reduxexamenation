import leavesbottom from '../assets/svg/graphics-footer.svg'
import styles from '../styles/LeafStyling.module.css'

const Footer = () => {
    return (
    <img src={leavesbottom} alt='Footer leaves' className={styles.gridItemFooter} /> 
    );
}
 
export default Footer;