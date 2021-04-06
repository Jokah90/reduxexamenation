import { Link } from "react-router-dom";
import React, { useState } from 'react'
import NavBtn from '../assets/svg/menu.svg'
import styles from '../styles/NavBtn.module.css'

const Nav = () => {

    const [visible, setVisible] = useState(false)
    const toggleNavigation = () => {
        setVisible(!visible)
    }

    return (
        <section>

            <img src={NavBtn} alt="hamburger menu button" className={styles.navbtn} onClick={toggleNavigation} />
            <section className={visible === true ? styles.showMenu : styles.hideMenu} >

                <section className={styles.dropDownContainer}>
                    <ul className={styles.dropDownContent}>
                        <Link to='/menu'>
                            <li>
                                Meny
                    </li>
                        </Link>
                        <hr />
                        <Link to='/about'>
                            <li>
                                Vårt kaffe
                    </li>
                        </Link>
                        <hr />
                        <Link to='/profile'>
                            <li>
                                Min profil
                    </li>
                        </Link>
                        <hr />
                        <Link to='/status'>
                            <li>
                                Orderstatus
                    </li>
                        </Link>
                    </ul>
                </section>
            </section>
        </section>
    );
}

export default Nav;
