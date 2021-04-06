import React from 'react'
import styles from '../styles/Status.module.css';
import Drone from '../assets/img/drone.png';

const Status = () => {
    return (
        <section className={styles.wrapper}>
            <p>Ordernummer från store</p>
            <img src={Drone} alt='vd img' className={styles.status} />
            <h1>Din beställning är påväg!</h1>
            <p>13 minuter</p>

            <button className={styles.btn}>Ok, cool!</button>

        </section>
    );
}

export default Status;