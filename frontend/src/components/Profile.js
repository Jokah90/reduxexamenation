import React from 'react'
import Header from "./Header";
import Nav from '../components/Nav.js';
import styles from '../styles/Profile.module.css';

const Profile = () => {
    return (
        <section className={styles.profileWrapper}>
            <Header />
            <Nav />
            <article className={styles.logIn}>
                <h1>Välkommen till AirBean-familjen!</h1>
                <p>Genom att skapa ett konto nedan kan du spara och se din orderhistorik</p>
                <form>
                    <label>First Name</label>
                    <input type="text" name="firstName" required />
                    <label>Email Address</label>
                    <input type="email" name="email" required />

                    <button type="submit">Brew me a cup!</button>
                    
                </form>
            </article>
        </section>
    );
}

export default Profile;