import React from 'react'
import styles from '../styles/Status.module.css';
import Drone from '../assets/img/drone.png';

const Status = () => {
    return (
        <section className={styles.wrapper}>
            <h3>Ordernummer från store</h3>
            <img src={Drone} alt='vd img' className={styles.status} />
            <h1>Din beställning är påväg!</h1>
            <p><strong>13</strong> minuter</p>
            <div>
            <button className={styles.btn}>Ok, cool!</button>
            </div>

        </section>
    );
}

export default Status;