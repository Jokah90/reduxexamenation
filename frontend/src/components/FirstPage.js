import { Link } from 'react-router-dom';
import styles from '../styles/FirstPage.module.css';
import airbeanlogo from '../assets/svg/airbean-landing.svg'
import leavesleft from '../assets/svg/intro-graphic-left.svg'
import leavesright from '../assets/svg/intro-graphic-right.svg'

const FirstPage = () => {
  return (
    <Link to='/menu'>
    <section className={styles.grid}>
        <img src={leavesleft} alt='Left side leaves' className={styles.gridItemLeft} />
        <img src={airbeanlogo} alt='Airbean logotype' className={styles.gridItem} />
        <img src={leavesright} alt='Right side leaves' className={styles.gridItemRight} />
    </section>
</Link>
  )
}

export default FirstPage;