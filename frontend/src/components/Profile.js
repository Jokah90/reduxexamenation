import React from "react";
import Header from "./Header";
import Nav from "../components/Nav.js";
import styles from "../styles/Profile.module.css";

const Profile = () => {
  return (
    <section className={styles.profileWrapper}>
      <Header />
      <Nav />
      <section className={styles.logInContainer}>
        <article className={styles.logIn}>
          <h1>Välkommen till AirBean-familjen!</h1>
          <p>
            Genom att skapa ett konto nedan kan du spara och se din
            orderhistorik
          </p>
          <form className={styles.formContainer}>
            <label>Namn</label>
            <input type="text" name="firstName" required />
            <label>Epost</label>
            <input type="email" name="email" required />
            <input type="radio" value="Male" name="gender" />
            <label>GDPR Ok!  </label>
            <button type="submit">Brew me a cup!</button>
          </form>
        </article>
      </section>
    </section>
  );
};

export default Profile;
